import axios from 'axios';
import Cookies from 'js-cookie';

/**
 * Create API instance with base configuration
 * Note: withCredentials: true is important for cookies to be sent with requests
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Important for cookies to be sent with requests
});

/**
 * Request interceptor for API calls - adds CSRF token if available
 * This provides additional protection against CSRF attacks when using cookies
 */
api.interceptors.request.use((config) => {
  // Get CSRF token from cookie (if it exists)
  const csrfToken = Cookies.get('csrf-token');
  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  
  // For fallback compatibility - use token from localStorage only when cookies not available
  // This should be removed in production once cookie-based auth is fully implemented
  if (!document.cookie.includes('session=')) {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  
  return config;
});

/**
 * Error handling utilities
 */
export class ApiError extends Error {
  status: number;
  details?: any;
  code?: string;

  constructor(message: string, status: number, details?: any, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
    this.code = code;
  }
}

// Standardized error formatting for toast messages or displays
export const formatErrorMessage = (error: any): string => {
  // If it's already an ApiError, use its message
  if (error instanceof ApiError) {
    return error.message;
  }
  
  // If it's an axios error with a response
  if (error.response?.data) {
    const data = error.response.data;
    // If the backend sent a formatted error
    if (data.error) {
      return data.error;
    }
    // If it has validation errors, return the first one
    if (data.details && Array.isArray(data.details) && data.details.length > 0) {
      return data.details[0].msg || data.details[0].message || 'Validation error';
    }
  }
  
  // Default error message
  return error.message || 'An unexpected error occurred';
};

/**
 * Response interceptor for API calls - handles errors
 */
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error statuses
    if (error.response) {
      const { status, data } = error.response;
      
      // Authentication errors
      if (status === 401) {
        // Clear any auth data
        localStorage.removeItem('token');
        Cookies.remove('session');
        Cookies.remove('csrf-token');
        
        // Redirect to login
        window.location.href = '/login?reason=session_expired';
      }
      
      // Format the error for better handling in components
      const message = data.error || 'An error occurred';
      const details = data.details || null;
      const code = data.code || null;
      
      // Convert to ApiError for easier handling
      return Promise.reject(new ApiError(message, status, details, code));
    }
    
    // Network errors or other errors without a response
    if (error.request) {
      return Promise.reject(
        new ApiError('Network error. Please check your connection.', 0)
      );
    }
    
    // Something else happened in setting up the request
    return Promise.reject(
      new ApiError('Request setup error: ' + error.message, 0)
    );
  }
);

/**
 * Authentication API endpoints
 */
export const authAPI = {
  /**
   * Register a new user
   * @param {string} email - User's email address
   * @param {string} password - User's password
   * @param {string} displayName - Optional display name
   */
  register: (email: string, password: string, displayName?: string) =>
    api.post('/users/register', { email, password, displayName }),
  
  /**
   * Login a user
   * @param {string} email - User's email address
   * @param {string} password - User's password
   */
  login: (email: string, password: string) =>
    api.post('/users/login', { email, password }),
  
  /**
   * Logout the current user by calling the backend logout endpoint
   * which will clear the HttpOnly cookies
   */
  logout: () => api.post('/users/logout'),
  
  /**
   * Get the current user's profile
   */
  getProfile: () => api.get('/users/profile'),
  
  /**
   * Update the current user's profile
   * @param {object} data - Profile data to update
   */
  updateProfile: (data: any) => api.put('/users/profile', data),
  
  /**
   * Delete the current user's profile
   */
  deleteProfile: () => api.delete('/users/profile'),
};

/**
 * Tournament API endpoints
 */
export const tournamentAPI = {
  /**
   * Create a new tournament
   * @param data Tournament data
   */
  createTournament: (data: any) => 
    api.post('/tournaments', data),
  
  /**
   * Get all tournaments with optional filters
   * @param page Page number for pagination
   * @param limit Items per page
   * @param phase Filter by tournament phase
   */
  getTournaments: (page = 1, limit = 10, phase?: string) => 
    api.get('/tournaments', { params: { page, limit, phase } }),
  
  /**
   * Get tournament by ID
   * @param id Tournament ID
   */
  getTournament: (id: string) => 
    api.get(`/tournaments/${id}`),
  
  /**
   * Update a tournament
   * @param id Tournament ID
   * @param data Updated tournament data
   */
  updateTournament: (id: string, data: any) => 
    api.put(`/tournaments/${id}`, data),
  
  /**
   * Delete a tournament
   * @param id Tournament ID
   */
  deleteTournament: (id: string) => 
    api.delete(`/tournaments/${id}`),
  
  /**
   * Check tournament password
   * @param id Tournament ID
   * @param password Password to check
   */
  checkPassword: (id: string, password: string) => 
    api.post(`/tournaments/${id}/password`, { password }),
};

/**
 * Entry API endpoints
 */
export const entriesAPI = {
  /**
   * Create a new entry
   * @param tournamentId Tournament ID
   * @param data Entry data
   */
  createEntry: (tournamentId: string, data: FormData) => 
    api.post(`/tournaments/${tournamentId}/entries`, data),
  
  /**
   * Get all entries for a tournament
   * @param tournamentId Tournament ID
   * @param page Page number for pagination
   * @param limit Items per page
   */
  getEntries: (tournamentId: string, page = 1, limit = 10) => 
    api.get(`/tournaments/${tournamentId}/entries`, { params: { page, limit } }),
  
  /**
   * Get a specific entry by ID
   * @param entryId Entry ID
   */
  getEntry: (entryId: string) => 
    api.get(`/entries/${entryId}`),
  
  /**
   * Update an entry
   * @param entryId Entry ID
   * @param data Updated entry data
   */
  updateEntry: (entryId: string, data: any) => 
    api.put(`/entries/${entryId}`, data),
  
  /**
   * Delete an entry
   * @param entryId Entry ID
   */
  deleteEntry: (entryId: string) => 
    api.delete(`/entries/${entryId}`),
  
  /**
   * Get entries created by the current user
   */
  getUserEntries: () => 
    api.get('/entries/user'),
};

/**
 * Vote API endpoints
 */
export const votesAPI = {
  /**
   * Submit a vote for an entry
   * @param entryId Entry ID
   * @param rating Rating value (1-5)
   * @param tournamentId Tournament ID
   */
  submitVote: (entryId: string, rating: number, tournamentId: string) => 
    api.post(`/votes`, { entryId, rating, tournamentId }),
  
  /**
   * Get all votes by the current user
   */
  getUserVotes: () => 
    api.get('/votes/user'),
  
  /**
   * Get votes for a specific entry
   * @param entryId Entry ID
   */
  getEntryVotes: (entryId: string) => 
    api.get(`/votes/entry/${entryId}`),
  
  /**
   * Check if the current user has voted for an entry
   * @param entryId Entry ID
   */
  hasVoted: (entryId: string) => 
    api.get(`/votes/check/${entryId}`),
};

export default api; 