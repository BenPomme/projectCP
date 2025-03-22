import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle token expiration
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  register: (email: string, password: string) =>
    api.post('/users/register', { email, password }),
  login: (email: string, password: string) =>
    api.post('/users/login', { email, password }),
  getProfile: () => api.get('/users/profile'),
  updateProfile: (data: any) => api.put('/users/profile', data),
  deleteProfile: () => api.delete('/users/profile'),
};

export const entriesAPI = {
  createEntry: (data: FormData) => api.post('/entries', data),
  getEntries: () => api.get('/entries'),
  getEntry: (id: string) => api.get(`/entries/${id}`),
  updateEntry: (id: string, data: any) => api.put(`/entries/${id}`, data),
  deleteEntry: (id: string) => api.delete(`/entries/${id}`),
};

export const votesAPI = {
  vote: (entryId: string) => api.post(`/votes/${entryId}`),
  getVotes: () => api.get('/votes'),
  getEntryVotes: (entryId: string) => api.get(`/votes/entry/${entryId}`),
};

export default api; 