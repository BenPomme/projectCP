import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { 
  getTournamentById, 
  getEntriesForTournament, 
  submitVote, 
  getUserVotesForTournament 
} from '../services/firebase';
import VotingScale from '../components/VotingScale';

export default function VotingPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [entries, setEntries] = React.useState<any[]>([]);
  const [tournament, setTournament] = React.useState<any>(null);
  const [userVotes, setUserVotes] = React.useState<Record<string, number>>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Get the actual tournament ID or use 'current' for backward compatibility
  const effectiveTournamentId = tournamentId || 'current';

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log(`Fetching tournament state and entries for tournament ${effectiveTournamentId}...`);
      
      // Get tournament
      const tournamentData = await getTournamentById(effectiveTournamentId);
      if (!tournamentData) {
        setError('Tournament not found');
        setLoading(false);
        return;
      }
      
      console.log("Tournament state:", tournamentData);
      console.log("Voting question from tournament:", tournamentData?.votingQuestion);
      setTournament(tournamentData);
      
      // Check if tournament is in voting phase
      if (tournamentData.currentPhase !== 'voting') {
        setError('This tournament is not currently in the voting phase');
        setLoading(false);
        return;
      }
      
      // Get entries
      const entriesData = await getEntriesForTournament(effectiveTournamentId);
      console.log("Entries:", entriesData);
      setEntries(entriesData);
      
      if (user?.id) {
        // Get user votes
        const votesData = await getUserVotesForTournament(user.id, effectiveTournamentId);
        console.log("User votes:", votesData);
        setUserVotes(votesData);

        // Check if user has reached vote limit
        if (tournamentData?.maxVotesPerUser !== null && tournamentData?.maxVotesPerUser !== undefined) {
          const voteCount = Object.keys(votesData).length;
          if (voteCount >= tournamentData.maxVotesPerUser) {
            setError(`You have reached the maximum number of votes (${tournamentData.maxVotesPerUser}) for this tournament`);
          }
        }
      }
    } catch (err) {
      setError('Failed to load voting data');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, [user?.id, effectiveTournamentId]);

  const handleVote = async (entryId: string, rating: number) => {
    if (!user?.id) {
      setError('You must be logged in to vote');
      return;
    }
    
    try {
      // Check if user has already voted for this entry
      if (userVotes[entryId]) {
        setError('You have already voted for this entry');
        return;
      }

      // Check if user has reached vote limit
      if (tournament?.maxVotesPerUser !== null && tournament?.maxVotesPerUser !== undefined) {
        const voteCount = Object.keys(userVotes).length;
        if (voteCount >= tournament.maxVotesPerUser) {
          setError(`You have reached the maximum number of votes (${tournament.maxVotesPerUser})`);
          return;
        }
      }

      console.log(`Submitting vote: Entry ID ${entryId}, Rating ${rating}, Tournament ID ${effectiveTournamentId}`);
      setLoading(true);
      
      try {
        await submitVote(entryId, rating, effectiveTournamentId);
        console.log('Vote submitted successfully');
        
        // Update local state temporarily
        setUserVotes(prev => {
          const newVotes = { ...prev, [entryId]: rating };
          console.log('Updated user votes:', newVotes);
          return newVotes;
        });
        
        // Reload data
        console.log('Reloading data after vote...');
        await fetchData();
        
        setError(null);
      } catch (voteError: any) {
        console.error('Error during vote submission:', voteError);
        setError(`Failed to submit vote: ${voteError.message}`);
      } finally {
        setLoading(false);
      }
    } catch (err) {
      setError('Failed to submit vote');
      console.error('Error submitting vote:', err);
    }
  };

  if (loading) {
    return <div className="animate-pulse p-8 text-center">Loading entries and votes...</div>;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error}</p>
          {error === 'Tournament not found' && (
            <button 
              className="mt-4 text-primary-600 hover:text-primary-700"
              onClick={() => navigate('/')}
            >
              Return to Home
            </button>
          )}
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
            <p className="text-2xl font-bold text-primary-600">{Object.keys(userVotes).length}</p>
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
                currentRating={userVotes[entry.id]}
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