import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Entry, Vote } from '../services/firebase';

interface UserStats {
  totalEntries: number;
  totalVotes: number;
  averageRating: number;
  entries: Entry[];
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserStats = async () => {
      if (!user) return;

      try {
        // Fetch user's entries
        const entriesQuery = query(
          collection(db, 'entries'),
          where('userId', '==', user.id)
        );
        const entriesSnapshot = await getDocs(entriesQuery);
        const entries = entriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Entry[];

        // Initialize stats with entries data
        let totalVotes = 0;
        let averageRating = 0;
        let votes: Vote[] = [];

        // Only fetch votes if the user has entries
        if (entries.length > 0) {
          const votesQuery = query(
            collection(db, 'votes'),
            where('entryId', 'in', entries.map(entry => entry.id))
          );
          const votesSnapshot = await getDocs(votesQuery);
          votes = votesSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Vote[];

          // Calculate statistics
          totalVotes = votes.length;
          averageRating = totalVotes > 0
            ? votes.reduce((acc, vote) => acc + (vote.rating || 0), 0) / totalVotes
            : 0;
        }

        setStats({
          totalEntries: entries.length,
          totalVotes,
          averageRating,
          entries
        });
      } catch (err: any) {
        setError(err.message || 'Failed to fetch user statistics');
      } finally {
        setLoading(false);
      }
    };

    fetchUserStats();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center space-x-4">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt={user.displayName || 'User avatar'}
              className="h-16 w-16 rounded-full"
            />
          ) : (
            <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
              <span className="text-2xl text-primary-600">
                {user?.displayName?.[0] || user?.email?.[0] || '?'}
              </span>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {user?.displayName || 'User'}
            </h1>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Entries
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {stats?.totalEntries || 0}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Votes Received
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {stats?.totalVotes || 0}
              </dd>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Average Rating
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {stats?.averageRating.toFixed(1) || '0.0'}
              </dd>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Your Entries</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats?.entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <img
                  src={entry.imageUrl}
                  alt={entry.title}
                  className="w-full h-48 object-cover"
                />
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {entry.title}
                  </h3>
                  {entry.description && (
                    <p className="mt-2 text-sm text-gray-500">
                      {entry.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {entry.voteCount} votes
                    </div>
                    <div className="text-sm font-medium text-primary-600">
                      Rating: {entry.voteCount > 0
                        ? (entry.voteCount / stats.totalVotes * 100).toFixed(1)
                        : '0.0'}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 