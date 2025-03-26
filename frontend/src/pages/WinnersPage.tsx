import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import { getTournamentState } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';

interface Entry {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  userId: string;
  userDisplayName: string;
  userPhotoURL: string | null;
  createdAt: any;
  voteCount: number;
  averageRating: number;
}

export default function WinnersPage() {
  const [winners, setWinners] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tournamentPhase, setTournamentPhase] = useState<string>('');

  useEffect(() => {
    fetchWinners();
    fetchTournamentState();
  }, []);

  const fetchTournamentState = async () => {
    try {
      const state = await getTournamentState();
      if (state) {
        setTournamentPhase(state.currentPhase);
      }
    } catch (err) {
      console.error('Error fetching tournament state:', err);
    }
  };

  const fetchWinners = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Query for entries with highest average ratings
      const entriesQuery = query(
        collection(db, 'entries'),
        where('status', '==', 'approved'),
        orderBy('averageRating', 'desc'),
        orderBy('voteCount', 'desc'),
        limit(10)
      );
      
      const entriesSnapshot = await getDocs(entriesQuery);
      const entriesData = entriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Entry[];
      
      setWinners(entriesData);
    } catch (err: any) {
      console.error('Error fetching winners:', err);
      setError(err.message || 'Failed to load winners. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Competition Winners</h1>
        
        {tournamentPhase !== 'completed' && (
          <div className="mt-4 rounded-md bg-yellow-50 p-4 max-w-3xl mx-auto">
            <div className="text-sm text-yellow-700">
              {tournamentPhase === 'submission' 
                ? 'The competition is still in the submission phase. Winners will be announced after voting is complete.'
                : tournamentPhase === 'voting'
                ? 'Voting is currently in progress. Final winners will be announced after the voting phase ends.'
                : 'The competition results are not yet finalized.'}
            </div>
          </div>
        )}
      </div>
      
      {error && (
        <div className="rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      
      {winners.length > 0 ? (
        <div className="space-y-8">
          {/* First place - larger display */}
          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 shadow-xl rounded-lg overflow-hidden">
            <div className="relative">
              <div className="absolute top-4 left-4 bg-yellow-500 text-white px-3 py-1 rounded-full font-bold">
                1st Place
              </div>
              <img
                src={winners[0].imageUrl}
                alt={winners[0].title}
                className="w-full h-96 object-contain bg-white"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{winners[0].title}</h2>
              {winners[0].description && (
                <p className="mt-2 text-gray-600">{winners[0].description}</p>
              )}
              <div className="mt-4 flex items-center justify-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">By</span>
                  {winners[0].userPhotoURL ? (
                    <img
                      src={winners[0].userPhotoURL}
                      alt={winners[0].userDisplayName}
                      className="h-6 w-6 rounded-full"
                    />
                  ) : (
                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs text-gray-600">
                        {winners[0].userDisplayName?.[0] || '?'}
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-medium text-gray-900">
                    {winners[0].userDisplayName}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-900">
                    {(winners[0].averageRating || 0).toFixed(1)} ({winners[0].voteCount || 0} votes)
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Remaining winners grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {winners.slice(1).map((entry, index) => (
              <div key={entry.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="absolute top-2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full text-sm font-bold">
                    {index + 2}{getOrdinalSuffix(index + 2)} Place
                  </div>
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{entry.title}</h3>
                  <div className="mt-2 flex items-center text-sm">
                    <span className="text-gray-500 mr-1">By</span>
                    <span className="font-medium text-gray-900">{entry.userDisplayName}</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm text-gray-600">
                      {(entry.averageRating || 0).toFixed(1)} ({entry.voteCount || 0} votes)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No entries found. Winners will be displayed after the voting phase is complete.
          </p>
        </div>
      )}
    </div>
  );
}

// Helper function to get ordinal suffix for numbers
function getOrdinalSuffix(num: number): string {
  const j = num % 10;
  const k = num % 100;
  if (j === 1 && k !== 11) {
    return 'st';
  }
  if (j === 2 && k !== 12) {
    return 'nd';
  }
  if (j === 3 && k !== 13) {
    return 'rd';
  }
  return 'th';
} 