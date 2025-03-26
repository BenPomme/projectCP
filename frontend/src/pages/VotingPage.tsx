import React from 'react';
import { useAuthStore } from '../store/authStore';
import { getTournamentState, getEntries, submitVote, getVotes } from '../services/firebase';
import VotingScale from '../components/VotingScale';

export default function VotingPage() {
  const { user } = useAuthStore();
  const [entries, setEntries] = React.useState<any[]>([]);
  const [tournamentState, setTournamentState] = React.useState<any>(null);
  const [userVotes, setUserVotes] = React.useState<Record<string, number>>({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      console.log("Fetching tournament state and entries...");
      
      const state = await getTournamentState();
      console.log("Tournament state:", state);
      setTournamentState(state);
      
      const entriesData = await getEntries();
      console.log("Entries:", entriesData);
      setEntries(entriesData);
      
      if (user?.id) {
        const votesData = await getVotes(user.id);
        console.log("User votes:", votesData);
        setUserVotes(votesData);

        // Check if user has reached vote limit
        if (state?.maxVotesPerUser !== null) {
          const voteCount = Object.keys(votesData).length;
          if (voteCount >= state.maxVotesPerUser) {
            setError(`You have reached the maximum number of votes (${state.maxVotesPerUser})`);
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
  }, [user?.id]);

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
      if (tournamentState?.maxVotesPerUser !== null) {
        const voteCount = Object.keys(userVotes).length;
        if (voteCount >= tournamentState.maxVotesPerUser) {
          setError(`You have reached the maximum number of votes (${tournamentState.maxVotesPerUser})`);
          return;
        }
      }

      console.log(`Submitting vote: Entry ID ${entryId}, Rating ${rating}`);
      await submitVote(entryId, rating);
      
      // Update local state temporarily
      setUserVotes(prev => ({ ...prev, [entryId]: rating }));
      
      // Refresh the data to get updated vote counts
      await fetchData();
      
      setError(null);
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
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Vote on Entries</h1>
      
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
              {tournamentState?.maxVotesPerUser === null ? 'Unlimited' : tournamentState.maxVotesPerUser}
            </p>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p>Voting Question: <span className="font-medium">{tournamentState?.votingQuestion || "How would you rate this entry?"}</span></p>
        </div>
      </div>
      
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
              tournamentState={tournamentState}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 