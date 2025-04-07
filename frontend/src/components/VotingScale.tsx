import React from 'react';
import { useAuthStore } from '../store/authStore';
import { getTournamentState } from '../services/firebase';
import { TournamentState } from '../services/firebase';

interface VotingScaleProps {
  entryId: string;
  onVote: (rating: number) => Promise<void>;
  currentRating?: number;
  tournamentState?: TournamentState; // Use proper type instead of any
  entryTitle?: string; // Add entry title for better accessibility
}

export default function VotingScale({ 
  entryId, 
  onVote, 
  currentRating, 
  tournamentState: propsTournamentState,
  entryTitle = 'this entry'
}: VotingScaleProps) {
  const [localTournamentState, setLocalTournamentState] = React.useState<TournamentState | null>(null);
  const [loading, setLoading] = React.useState(!propsTournamentState);
  const [error, setError] = React.useState<string | null>(null);
  const [question, setQuestion] = React.useState<string>("Rate this design:");
  const [focusedRating, setFocusedRating] = React.useState<number | null>(null);

  // Generate a unique ID for this voting scale instance to link with ARIA attributes
  const ratingGroupId = React.useMemo(() => `rating-group-${entryId}`, [entryId]);

  React.useEffect(() => {
    // If tournament state is provided via props, use it
    if (propsTournamentState) {
      setLocalTournamentState(propsTournamentState);
      if (propsTournamentState.votingQuestion) {
        setQuestion(propsTournamentState.votingQuestion);
      }
      setLoading(false);
      return;
    }

    // Otherwise fetch it
    const fetchTournamentState = async () => {
      try {
        const state = await getTournamentState();
        setLocalTournamentState(state);
        if (state?.votingQuestion) {
          setQuestion(state.votingQuestion);
        }
      } catch (err) {
        setError('Failed to load tournament settings');
        console.error('Error fetching tournament state:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTournamentState();
  }, [propsTournamentState]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, rating: number) => {
    if (hasVoted) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (rating > 1) {
          document.getElementById(`rating-${entryId}-${rating - 1}`)?.focus();
        }
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (rating < 5) {
          document.getElementById(`rating-${entryId}-${rating + 1}`)?.focus();
        }
        break;
      case ' ':
      case 'Enter':
        e.preventDefault();
        if (!hasVoted) {
          onVote(rating);
        }
        break;
      default:
        break;
    }
  };

  if (loading) {
    return <div className="animate-pulse" aria-live="polite">Loading voting options...</div>;
  }

  if (error) {
    return <div className="text-red-500" role="alert">{error}</div>;
  }

  // Check if the user has already voted for this entry
  const hasVoted = currentRating !== undefined && currentRating !== null;

  return (
    <div className="space-y-4">
      <div 
        className="text-lg font-medium text-gray-900"
        id={`${ratingGroupId}-label`}
      >
        {question}
      </div>
      
      <div 
        className="flex items-center space-x-4"
        role="radiogroup"
        aria-labelledby={`${ratingGroupId}-label`}
        aria-describedby={hasVoted ? `${ratingGroupId}-voted` : undefined}
      >
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            id={`rating-${entryId}-${rating}`}
            key={rating}
            onClick={() => !hasVoted && onVote(rating)}
            onKeyDown={(e) => handleKeyDown(e, rating)}
            onFocus={() => setFocusedRating(rating)}
            onBlur={() => setFocusedRating(null)}
            disabled={hasVoted}
            aria-pressed={currentRating === rating}
            aria-disabled={hasVoted}
            aria-label={`Rate ${entryTitle} ${rating} out of 5 stars`}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors
              ${currentRating === rating
                ? 'bg-indigo-600 text-white'
                : hasVoted
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : focusedRating === rating 
                    ? 'bg-gray-200 text-gray-700 ring-2 ring-indigo-500 ring-offset-2'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              }`}
          >
            {rating}
          </button>
        ))}
      </div>
      
      {hasVoted && (
        <p 
          id={`${ratingGroupId}-voted`}
          className="text-sm text-gray-500"
          aria-live="polite"
        >
          You've already rated this entry {currentRating} out of 5 stars
        </p>
      )}

      {/* Screen reader only instructions */}
      <span className="sr-only" aria-live="polite">
        {hasVoted 
          ? `You rated ${entryTitle} ${currentRating} out of 5 stars` 
          : `Use left and right arrow keys to navigate between rating options, and space or enter to submit your rating`
        }
      </span>
    </div>
  );
} 