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

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [state, entriesData, votesData] = await Promise.all([
          getTournamentState(),
          getEntries(),
          getVotes(user?.id || '')
        ]);

        setTournamentState(state);
        setEntries(entriesData);
        setUserVotes(votesData);

        // Check if user has reached vote limit
        if (state?.maxVotesPerUser !== null) {
          const voteCount = Object.keys(votesData).length;
          if (voteCount >= state.maxVotesPerUser) {
            setError(`You have reached the maximum number of votes (${state.maxVotesPerUser})`);
          }
        }
      } catch (err) {
        setError('Failed to load voting data');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [user?.id]);

  const handleVote = async (entryId: string, rating: number) => {
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

      await submitVote(entryId, rating);
      setUserVotes(prev => ({ ...prev, [entryId]: rating }));
      setError(null);
    } catch (err) {
      setError('Failed to submit vote');
      console.error('Error submitting vote:', err);
    }
  };

  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
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
            
            <VotingScale
              entryId={entry.id}
              onVote={(rating) => handleVote(entry.id, rating)}
              currentRating={userVotes[entry.id]}
            />
          </div>
        ))}
      </div>
    </div>
  );
} 