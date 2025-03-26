import React from 'react';
import { useAuthStore } from '../store/authStore';
import { getTournamentState } from '../services/firebase';

interface VotingScaleProps {
  entryId: string;
  onVote: (rating: number) => Promise<void>;
  currentRating?: number;
}

export default function VotingScale({ entryId, onVote, currentRating }: VotingScaleProps) {
  const [tournamentState, setTournamentState] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchTournamentState = async () => {
      try {
        const state = await getTournamentState();
        setTournamentState(state);
      } catch (err) {
        setError('Failed to load tournament settings');
        console.error('Error fetching tournament state:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTournamentState();
  }, []);

  if (loading) {
    return <div className="animate-pulse">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium text-gray-900">
        {tournamentState?.votingQuestion || "How would you rate this entry?"}
      </p>
      
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => onVote(rating)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold
              ${currentRating === rating
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
} 