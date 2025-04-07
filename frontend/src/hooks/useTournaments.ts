import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { tournamentAPI, entriesAPI, votesAPI, ApiError, formatErrorMessage } from '../services/api';
import { TournamentState } from '../types/tournament';
import toast from 'react-hot-toast'; // Import toast for error notifications

// Types for our API responses
interface Entry {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  voteCount: number;
  averageRating?: number;
  userId: string;
  tournamentId: string;
  createdAt: string;
  updatedAt: string;
}

interface Vote {
  id: string;
  entryId: string;
  userId: string;
  rating: number;
  tournamentId: string;
  createdAt: string;
}

interface PaginatedResponse<T> {
  data: T[];
  meta: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

// React Query keys
export const tournamentKeys = {
  all: ['tournaments'] as const,
  lists: () => [...tournamentKeys.all, 'list'] as const,
  list: (filters: object) => [...tournamentKeys.lists(), filters] as const,
  details: () => [...tournamentKeys.all, 'detail'] as const,
  detail: (id: string) => [...tournamentKeys.details(), id] as const,
  entries: (tournamentId: string) => [...tournamentKeys.detail(tournamentId), 'entries'] as const,
  votes: (tournamentId: string, userId: string) => [...tournamentKeys.detail(tournamentId), 'votes', userId] as const,
};

// Get all tournaments with pagination
export function useTournaments(page = 1, limit = 10, phase?: string) {
  return useQuery({
    queryKey: tournamentKeys.list({ page, limit, phase }),
    queryFn: async () => {
      try {
        const response = await tournamentAPI.getTournaments(page, limit, phase);
        return response.data as PaginatedResponse<TournamentState>;
      } catch (error) {
        // Log and convert errors
        console.error('Error fetching tournaments:', error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    staleTime: import.meta.env.VITE_CACHE_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_STALE_TIME) 
      : 5 * 60 * 1000, // 5 minutes default
  });
}

// Get tournaments with infinite scrolling
export function useInfiniteTournaments(limit = 10, phase?: string) {
  return useInfiniteQuery({
    queryKey: tournamentKeys.list({ limit, phase, infinite: true }),
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await tournamentAPI.getTournaments(pageParam, limit, phase);
        return response.data as PaginatedResponse<TournamentState>;
      } catch (error) {
        console.error('Error fetching infinite tournaments:', error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    staleTime: import.meta.env.VITE_CACHE_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_STALE_TIME) 
      : 5 * 60 * 1000,
  });
}

// Get a specific tournament by ID
export function useTournament(tournamentId: string | undefined) {
  return useQuery({
    queryKey: tournamentId ? tournamentKeys.detail(tournamentId) : null,
    queryFn: async () => {
      if (!tournamentId) return null;
      try {
        const response = await tournamentAPI.getTournament(tournamentId);
        return response.data as TournamentState;
      } catch (error) {
        console.error(`Error fetching tournament ${tournamentId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    enabled: !!tournamentId,
    staleTime: import.meta.env.VITE_CACHE_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_STALE_TIME) 
      : 5 * 60 * 1000,
  });
}

// Get entries for a tournament with pagination
export function useTournamentEntries(tournamentId: string | undefined, page = 1, limit = 10) {
  return useQuery({
    queryKey: tournamentId ? [...tournamentKeys.entries(tournamentId), { page, limit }] : null,
    queryFn: async () => {
      if (!tournamentId) return { data: [], meta: { currentPage: 0, totalPages: 0, totalItems: 0, itemsPerPage: 0 } };
      try {
        const response = await entriesAPI.getEntries(tournamentId, page, limit);
        return response.data as PaginatedResponse<Entry>;
      } catch (error) {
        console.error(`Error fetching entries for tournament ${tournamentId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    enabled: !!tournamentId,
    staleTime: import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME) 
      : 2 * 60 * 1000, // 2 minutes default
  });
}

// Get entries with infinite scrolling
export function useInfiniteTournamentEntries(tournamentId: string | undefined, limit = 10) {
  return useInfiniteQuery({
    queryKey: tournamentId ? [...tournamentKeys.entries(tournamentId), { limit, infinite: true }] : null,
    queryFn: async ({ pageParam = 1 }) => {
      if (!tournamentId) return { data: [], meta: { currentPage: 0, totalPages: 0, totalItems: 0, itemsPerPage: 0 } };
      try {
        const response = await entriesAPI.getEntries(tournamentId, pageParam, limit);
        return response.data as PaginatedResponse<Entry>;
      } catch (error) {
        console.error(`Error fetching infinite entries for tournament ${tournamentId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.meta;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    enabled: !!tournamentId,
    staleTime: import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME) 
      : 2 * 60 * 1000,
  });
}

// Get a specific entry by ID
export function useEntry(entryId: string | undefined) {
  return useQuery({
    queryKey: entryId ? ['entries', entryId] : null,
    queryFn: async () => {
      if (!entryId) return null;
      try {
        const response = await entriesAPI.getEntry(entryId);
        return response.data as Entry;
      } catch (error) {
        console.error(`Error fetching entry ${entryId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    enabled: !!entryId,
    staleTime: import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_ENTRIES_STALE_TIME) 
      : 2 * 60 * 1000,
  });
}

// Get user votes for a tournament
export function useUserVotes(tournamentId: string | undefined) {
  return useQuery({
    queryKey: tournamentId ? tournamentKeys.votes(tournamentId, 'current') : null,
    queryFn: async () => {
      if (!tournamentId) return [];
      try {
        const response = await votesAPI.getUserVotes();
        return (response.data as Vote[]).filter(vote => vote.tournamentId === tournamentId);
      } catch (error) {
        console.error(`Error fetching user votes for tournament ${tournamentId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    enabled: !!tournamentId,
    staleTime: import.meta.env.VITE_CACHE_VOTES_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_VOTES_STALE_TIME) 
      : 2 * 60 * 1000,
  });
}

// Check if user has voted for a specific entry
export function useHasVoted(entryId: string | undefined) {
  return useQuery({
    queryKey: entryId ? ['votes', 'check', entryId] : null,
    queryFn: async () => {
      if (!entryId) return false;
      try {
        const response = await votesAPI.hasVoted(entryId);
        return response.data.hasVoted as boolean;
      } catch (error) {
        console.error(`Error checking vote status for entry ${entryId}:`, error);
        // Don't show toast for this query, it's a background check
        return false;
      }
    },
    enabled: !!entryId,
    staleTime: import.meta.env.VITE_CACHE_VOTES_STALE_TIME 
      ? parseInt(import.meta.env.VITE_CACHE_VOTES_STALE_TIME) 
      : 2 * 60 * 1000,
  });
}

// Submit a vote mutation
export function useSubmitVote() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({
      entryId,
      rating,
      tournamentId,
    }: {
      entryId: string;
      rating: number;
      tournamentId: string;
    }) => {
      try {
        const response = await votesAPI.submitVote(entryId, rating, tournamentId);
        return response.data as Vote;
      } catch (error) {
        console.error('Error submitting vote:', error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    onSuccess: (data, variables) => {
      const { tournamentId } = variables;
      
      // Invalidate related queries to refresh data
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.votes(tournamentId, 'current'),
      });
      
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.entries(tournamentId),
      });
      
      // Show success message
      toast.success('Vote submitted successfully!');
    },
    onError: (error) => {
      // Error is already displayed by the mutationFn
      console.error('Vote submission error:', error);
    }
  });
}

// Create a tournament mutation
export function useCreateTournament() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await tournamentAPI.createTournament(data);
        return response.data as TournamentState;
      } catch (error) {
        console.error('Error creating tournament:', error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    onSuccess: () => {
      // Invalidate tournaments list queries
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.lists(),
      });
      
      // Show success message
      toast.success('Tournament created successfully!');
    }
  });
}

// Update a tournament mutation
export function useUpdateTournament(tournamentId: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const response = await tournamentAPI.updateTournament(tournamentId, data);
        return response.data as TournamentState;
      } catch (error) {
        console.error(`Error updating tournament ${tournamentId}:`, error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    onSuccess: () => {
      // Invalidate related queries
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.detail(tournamentId),
      });
      
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.lists(),
      });
      
      // Show success message
      toast.success('Tournament updated successfully!');
    }
  });
}

// Create an entry mutation
export function useCreateEntry(tournamentId: string) {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: FormData) => {
      try {
        const response = await entriesAPI.createEntry(tournamentId, data);
        return response.data as Entry;
      } catch (error) {
        console.error('Error creating entry:', error);
        toast.error(formatErrorMessage(error));
        throw error;
      }
    },
    onSuccess: () => {
      // Invalidate entries list
      queryClient.invalidateQueries({
        queryKey: tournamentKeys.entries(tournamentId),
      });
      
      // Show success message
      toast.success('Entry submitted successfully!');
    }
  });
}