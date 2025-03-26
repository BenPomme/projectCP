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
    return <div className="animate-pulse">Loading voting options...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const isDisabled = currentRating !== undefined;

  return (
    <div className="space-y-4">
      <p className="text-lg font-medium text-gray-900">
        {tournamentState?.votingQuestion || "How would you rate this entry?"}
      </p>
      
      <div className="flex items-center space-x-4">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            onClick={() => !isDisabled && onVote(rating)}
            disabled={isDisabled}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors
              ${currentRating === rating
                ? 'bg-indigo-600 text-white'
                : isDisabled
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            title={isDisabled ? "You've already voted for this entry" : `Rate this entry ${rating}/5`}
          >
            {rating}
          </button>
        ))}
      </div>
      
      {isDisabled && (
        <p className="text-sm text-gray-500">You've already rated this entry</p>
      )}
    </div>
  );
} 