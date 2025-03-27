import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { 
  getTournamentById, 
  getApprovedEntriesForTournament,
  submitVote, 
  getUserVotesForTournament,
  getTournaments,
  TournamentState,
  TournamentEntry,
  TournamentVote
} from '../services/firebase';
import VotingScale from '../components/VotingScale';
import TournamentPasswordPrompt from '../components/TournamentPasswordPrompt';
import { format } from 'date-fns';

export default function VotingPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tournament, setTournament] = React.useState<TournamentState | null>(null);
  const [entries, setEntries] = React.useState<TournamentEntry[]>([]);
  const [userVotes, setUserVotes] = React.useState<TournamentVote[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [passwordRequired, setPasswordRequired] = React.useState(false);
  const [hasAccessPermission, setHasAccessPermission] = React.useState(false);
  const [reachedVoteLimit, setReachedVoteLimit] = React.useState(false);
  const [entriesLoading, setEntriesLoading] = React.useState(true);
  const [votingTournaments, setVotingTournaments] = React.useState<TournamentState[]>([]);
  
  // Get the actual tournament ID
  const actualTournamentId = tournamentId;

  // Fetch available voting tournaments
  React.useEffect(() => {
    const fetchVotingTournaments = async () => {
      try {
        setIsLoading(true);
        const allTournaments = await getTournaments();
        
        // Filter to only tournaments in voting phase
        const tournamentsInVotingPhase = allTournaments.filter(
          t => t.currentPhase === 'voting'
        );
        
        console.log(`Found ${tournamentsInVotingPhase.length} tournaments in voting phase`);
        setVotingTournaments(tournamentsInVotingPhase);
        
        // If we have a tournament ID, fetch that specific tournament
        if (actualTournamentId) {
          fetchData();
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('Error fetching voting tournaments:', err);
        setError('Failed to load available tournaments');
        setIsLoading(false);
      }
    };
    
    fetchVotingTournaments();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      if (!actualTournamentId) {
        setError('Tournament ID is required');
        return;
      }

      // Get tournament details
      const tournamentData = await getTournamentById(actualTournamentId);
      console.log('Tournament found:', tournamentData);
      
      if (!tournamentData) {
        setError('Tournament not found');
        return;
      }
      
      setTournament(tournamentData);
      
      // Check if voting is allowed in this tournament's current phase
      if (tournamentData.currentPhase !== 'voting') {
        setError('This tournament is not currently in the voting phase');
        return;
      }
      
      // Check if tournament is password protected
      if (tournamentData.isPasswordProtected) {
        console.log('Tournament is password protected');
        // Check if user is the owner (they bypass password protection)
        const isOwner = user?.id === tournamentData.ownerId;
        console.log('Is user owner?', isOwner);
        
        if (!isOwner) {
          // Check if user has already provided the password for this tournament
          const hasAccess = localStorage.getItem(`tournament_access_${actualTournamentId}_${user?.id}`);
          console.log('Has access from localStorage?', !!hasAccess);
          
          if (!hasAccess) {
            console.log('Setting passwordRequired to true');
            setPasswordRequired(true);
            return;
          }
        }
      }
      
      setHasAccessPermission(true);
      
      // Load entries and user votes - ensure tournament state is set first
      await loadEntriesAndVotes();
    } catch (err: any) {
      console.error('Error fetching tournament data:', err);
      setError(err.message || 'Failed to load tournament data');
    } finally {
      setIsLoading(false);
    }
  };

  // Load entries and user votes
  const loadEntriesAndVotes = async () => {
    try {
      setEntriesLoading(true);
      
      if (!actualTournamentId) {
        console.error('No tournament ID provided to load entries');
        return;
      }
      
      // Get approved entries for this tournament
      const entriesData = await getApprovedEntriesForTournament(actualTournamentId);
      console.log(`Found ${entriesData.length} approved entries for tournament ${actualTournamentId}`);
      
      // Get user votes for this tournament
      if (user?.id) {
        const userVotesData = await getUserVotesForTournament(actualTournamentId, user.id);
        console.log(`Found ${userVotesData.length} votes by user for tournament ${actualTournamentId}`);
        setUserVotes(userVotesData);
        
        // Check if user has reached vote limit - only if tournament is defined
        if (tournament && tournament.maxVotesPerUser !== null && userVotesData.length >= tournament.maxVotesPerUser) {
          setReachedVoteLimit(true);
        }
      }
      
      // Create a shuffled copy of entries for voting
      const shuffledEntries = [...entriesData].sort(() => Math.random() - 0.5);
      setEntries(shuffledEntries);
    } catch (err: any) {
      console.error('Error loading entries and votes:', err);
      setError(err.message || 'Failed to load entries');
    } finally {
      setEntriesLoading(false);
    }
  };

  React.useEffect(() => {
    if (user && actualTournamentId) {
      fetchData();
    }
  }, [actualTournamentId, user]);

  // Handle successful password entry
  const handlePasswordSuccess = async () => {
    setPasswordRequired(false);
    setHasAccessPermission(true);
    
    // Load entries and votes after password verification
    await loadEntriesAndVotes();
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
    
    try {
      // Check if user has already voted for this entry
      if (userVotes.some(vote => vote.entryId === entryId)) {
        setError('You have already voted for this entry');
        return;
      }

      // Check if user has reached vote limit
      if (tournament?.maxVotesPerUser !== null && tournament?.maxVotesPerUser !== undefined) {
        const voteCount = userVotes.length;
        if (voteCount >= tournament.maxVotesPerUser) {
          setError(`You have reached the maximum number of votes (${tournament.maxVotesPerUser})`);
          return;
        }
      }

      console.log(`Submitting vote: Entry ID ${entryId}, Rating ${rating}, Tournament ID ${tournament.id}`);
      setIsSubmitting(true);
      
      try {
        await submitVote(entryId, rating, tournament.id);
        console.log('Vote submitted successfully');
        
        // Update local state temporarily
        setUserVotes(prev => [...prev, { entryId, rating }]);
        
        // Reload data
        console.log('Reloading data after vote...');
        await fetchData();
        
        setError(null);
      } catch (voteError: any) {
        console.error('Error during vote submission:', voteError);
        setError(`Failed to submit vote: ${voteError.message}`);
      } finally {
        setIsSubmitting(false);
      }
    } catch (err) {
      setError('Failed to submit vote');
      console.error('Error submitting vote:', err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // If no tournament is selected, show list of available voting tournaments
  if (!actualTournamentId) {
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

  if (error || !tournament) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error || "Tournament data not available"}</p>
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
      </div>
      
      {entries.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="object-cover rounded-lg"
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{entry.title}</h3>
              <p className="text-gray-600 mb-4">{entry.description}</p>
              
              {/* Display vote count and average rating */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
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
                currentRating={userVotes.find(vote => vote.entryId === entry.id)?.rating || 0}
                tournamentState={tournament}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-600">No entries available for voting.</p>
        </div>
      )}
    </div>
  );
} 