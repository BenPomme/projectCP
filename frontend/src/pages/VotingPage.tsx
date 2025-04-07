import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { format } from 'date-fns';
import { TournamentState, TournamentEntry, TournamentVote } from '../services/firebase';
import VotingScale from '../components/VotingScale';
import TournamentPasswordPrompt from '../components/TournamentPasswordPrompt';
import { 
  useTournament, 
  useVotingTournaments, 
  useTournamentEntries, 
  useUserVotes, 
  useSubmitVote 
} from '../hooks/useTournaments';

// Number of entries to display per page from environment variables
const ENTRIES_PER_PAGE = import.meta.env.VITE_APP_ENTRIES_PER_PAGE 
  ? parseInt(import.meta.env.VITE_APP_ENTRIES_PER_PAGE as string, 10) 
  : 9;

export default function VotingPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  
  // State
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [hasAccessPermission, setHasAccessPermission] = useState(false);
  const [shuffledEntryIds, setShuffledEntryIds] = useState<string[]>([]);
  
  // React Query hooks
  const { 
    data: votingTournaments = [], 
    isLoading: tournamentsLoading 
  } = useVotingTournaments();
  
  const {
    data: tournament,
    isLoading: tournamentLoading
  } = useTournament(tournamentId);
  
  const {
    data: entries = [],
    isLoading: entriesLoading
  } = useTournamentEntries(hasAccessPermission ? tournamentId : undefined);
  
  const {
    data: userVotes = [],
    isLoading: votesLoading
  } = useUserVotes(tournamentId, user?.id);
  
  const submitVoteMutation = useSubmitVote();
  
  // Effects to check access and shuffle entries
  useEffect(() => {
    // If tournament data is loaded, check if password is required
    if (tournament && !hasAccessPermission) {
      if (tournament.isPasswordProtected) {
        // Check if user is the owner (they bypass password protection)
        const isOwner = user?.id === tournament.ownerId;
        
        if (!isOwner) {
          // Check if user has already provided the password for this tournament
          const hasAccess = localStorage.getItem(`tournament_access_${tournamentId}_${user?.id}`);
          
          if (!hasAccess) {
            setPasswordRequired(true);
            return;
          }
        }
      }
      
      setHasAccessPermission(true);
    }
  }, [tournament, tournamentId, user, hasAccessPermission]);
  
  // Shuffle entries once they're loaded
  useEffect(() => {
    if (entries.length > 0 && shuffledEntryIds.length === 0) {
      // Create array of entry IDs and shuffle them
      const entryIds = entries.map(entry => entry.id);
      const shuffled = [...entryIds].sort(() => Math.random() - 0.5);
      setShuffledEntryIds(shuffled);
    }
  }, [entries, shuffledEntryIds.length]);
  
  // Compute derived values
  const reachedVoteLimit = useMemo(() => {
    if (!tournament || tournament.maxVotesPerUser === null || tournament.maxVotesPerUser === undefined) {
      return false;
    }
    return userVotes.length >= tournament.maxVotesPerUser;
  }, [tournament, userVotes.length]);
  
  // Order entries based on shuffled IDs
  const orderedEntries = useMemo(() => {
    if (shuffledEntryIds.length === 0) return entries;
    
    // Create a map for faster lookup
    const entryMap = new Map(entries.map(entry => [entry.id, entry]));
    
    // Return entries in shuffled order
    return shuffledEntryIds
      .map(id => entryMap.get(id))
      .filter(entry => entry !== undefined) as TournamentEntry[];
  }, [entries, shuffledEntryIds]);
  
  // Calculate pagination
  const totalPages = Math.ceil(orderedEntries.length / ENTRIES_PER_PAGE);
  
  const displayedEntries = useMemo(() => {
    const startIndex = (currentPage - 1) * ENTRIES_PER_PAGE;
    const endIndex = startIndex + ENTRIES_PER_PAGE;
    return orderedEntries.slice(startIndex, endIndex);
  }, [orderedEntries, currentPage]);

  // Handle successful password entry
  const handlePasswordSuccess = async () => {
    setPasswordRequired(false);
    setHasAccessPermission(true);
  };

  const handleVote = async (entryId: string, rating: number) => {
    if (!user?.id) {
      setError('You must be logged in to vote');
      return;
    }
    
    if (!tournament) {
      setError('Tournament data not available');
      return;
    }
    
    // Check if user has already voted for this entry
    if (userVotes.some(vote => vote.entryId === entryId)) {
      setError('You have already voted for this entry');
      return;
    }

    // Check if user has reached vote limit
    if (tournament.maxVotesPerUser !== null && tournament.maxVotesPerUser !== undefined) {
      if (userVotes.length >= tournament.maxVotesPerUser) {
        setError(`You have reached the maximum number of votes (${tournament.maxVotesPerUser})`);
        return;
      }
    }

    try {
      // Submit vote using mutation
      await submitVoteMutation.mutateAsync({
        entryId,
        rating,
        tournamentId: tournament.id
      });
      
      setError(null);
    } catch (err: any) {
      console.error('Error submitting vote:', err);
      setError(err.message || 'Failed to submit vote');
    }
  };

  // Handle page changes
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll to top when changing pages
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Pagination UI component
  const Pagination = () => {
    // Don't show pagination if there's only one page
    if (totalPages <= 1) return null;

    // Create array of page numbers to display
    const pageNumbers = [];
    const maxPageButtons = 5; // Maximum number of page buttons to show
    
    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    
    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxPageButtons) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center mt-8">
        <nav className="flex items-center space-x-2" aria-label="Pagination">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Go to previous page"
          >
            Previous
          </button>
          
          {startPage > 1 && (
            <>
              <button
                onClick={() => goToPage(1)}
                className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label="Go to first page"
              >
                1
              </button>
              {startPage > 2 && (
                <span className="px-2 py-2 text-gray-500">...</span>
              )}
            </>
          )}
          
          {pageNumbers.map(number => (
            <button
              key={number}
              onClick={() => goToPage(number)}
              className={`px-3 py-2 rounded-md ${
                currentPage === number
                  ? 'bg-primary-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label={`Go to page ${number}`}
              aria-current={currentPage === number ? 'page' : undefined}
            >
              {number}
            </button>
          ))}
          
          {endPage < totalPages && (
            <>
              {endPage < totalPages - 1 && (
                <span className="px-2 py-2 text-gray-500">...</span>
              )}
              <button
                onClick={() => goToPage(totalPages)}
                className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
                aria-label={`Go to last page, page ${totalPages}`}
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            aria-label="Go to next page"
          >
            Next
          </button>
        </nav>
      </div>
    );
  };

  // Loading state
  const isLoading = tournamentLoading || (tournamentId ? entriesLoading || votesLoading : tournamentsLoading);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  // If no tournament is selected, show list of available voting tournaments
  if (!tournamentId) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Vote on Tournaments</h1>
        
        {votingTournaments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {votingTournaments.map(tournament => (
              <div key={tournament.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{tournament.name}</h3>
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                      Voting
                    </span>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {tournament.description || 'No description provided.'}
                  </p>
                  
                  <div className="mt-4 text-sm text-gray-500 space-y-1">
                    <div>
                      <span>Voting ends: </span>
                      <span>{format(tournament.votingPhaseEnd, 'PPP')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Link
                      to={`/tournament/${tournament.id}/vote`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      Vote Now
                    </Link>
                    
                    <Link
                      to={`/tournament/${tournament.id}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-gray-600">No tournaments currently in the voting phase.</p>
            <Link to="/" className="mt-4 inline-block text-primary-600 hover:underline">
              Return to Home
            </Link>
          </div>
        )}
      </div>
    );
  }

  // Display password prompt if tournament requires a password
  if (passwordRequired && !hasAccessPermission && tournament) {
    return (
      <TournamentPasswordPrompt
        tournamentId={tournament.id}
        tournamentName={tournament.name}
        onPasswordSuccess={handlePasswordSuccess}
      />
    );
  }

  // Error state
  if ((error && !submitVoteMutation.isError) || !tournament) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700" role="alert">{error || "Tournament data not available"}</p>
          <button 
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            onClick={() => navigate('/vote')}
          >
            Return to Voting Page
          </button>
        </div>
      </div>
    );
  }

  // Check if tournament is in voting phase
  if (tournament.currentPhase !== 'voting') {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
          <p className="text-yellow-700" role="alert">
            This tournament is not currently in the voting phase.
          </p>
          <button 
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            onClick={() => navigate('/vote')}
          >
            Return to Voting Page
          </button>
        </div>
      </div>
    );
  }

  // Main content
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">
        Vote on Entries {tournament?.name ? `- ${tournament.name}` : ''}
      </h1>
      
      {/* Vote Limits Info */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Your Voting Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Votes Cast:</p>
            <p className="text-2xl font-bold text-primary-600">{userVotes.length}</p>
          </div>
          <div>
            <p className="text-gray-600">Vote Limit:</p>
            <p className="text-2xl font-bold text-primary-600">
              {tournament?.maxVotesPerUser === null || tournament?.maxVotesPerUser === undefined ? 'Unlimited' : tournament.maxVotesPerUser}
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Voting Question: <span className="font-medium text-gray-900">{tournament?.votingQuestion || "How would you rate this entry?"}</span></p>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Voting Ends: <span className="font-medium text-gray-900">{tournament?.votingPhaseEnd.toLocaleDateString()}</span></p>
        </div>
        {orderedEntries.length > 0 && (
          <div className="mt-4 text-sm text-gray-500">
            <p>Showing page {currentPage} of {totalPages} ({orderedEntries.length} total entries)</p>
          </div>
        )}
      </div>
      
      {/* Display error from vote submission if any */}
      {submitVoteMutation.isError && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
          <p className="text-red-700" role="alert">
            {submitVoteMutation.error instanceof Error 
              ? submitVoteMutation.error.message 
              : 'Failed to submit vote. Please try again.'}
          </p>
        </div>
      )}
      
      {displayedEntries.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedEntries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="aspect-w-16 aspect-h-9 mb-4">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="object-cover rounded-lg"
                    loading="lazy" // Add lazy loading for better performance
                  />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{entry.title}</h3>
                <p className="text-gray-600 mb-4">{entry.description}</p>
                
                {/* Display vote count and average rating */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm font-medium text-gray-800">
                      {entry.averageRating ? entry.averageRating.toFixed(1) : '0.0'} ({entry.voteCount || 0} votes)
                    </span>
                  </div>
                </div>
                
                <VotingScale
                  entryId={entry.id}
                  onVote={(rating) => handleVote(entry.id, rating)}
                  currentRating={userVotes.find(vote => vote.entryId === entry.id)?.rating}
                  tournamentState={tournament}
                  entryTitle={entry.title}
                />
              </div>
            ))}
          </div>
          
          {/* Pagination controls */}
          <Pagination />
        </>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">No entries available for voting.</p>
        </div>
      )}
    </div>
  );
} 