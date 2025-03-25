import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Entry, getTournamentState, initializeTournamentState } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';

export default function HomePage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [tournamentState, setTournamentState] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch tournament state
        let state = await getTournamentState();
        
        // Initialize tournament state if it doesn't exist
        if (!state) {
          await initializeTournamentState();
          state = await getTournamentState();
        }
        
        setTournamentState(state);

        // Fetch recent entries
        const entriesQuery = query(
          collection(db, 'entries'),
          orderBy('createdAt', 'desc'),
          limit(6)
        );
        const entriesSnapshot = await getDocs(entriesQuery);
        const entriesData = entriesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Entry[];
        setEntries(entriesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {user?.isAdmin && (
        <div className="mb-8 bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Admin Quick Links</h2>
          <div className="flex space-x-4">
            <Link
              to="/admin"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Admin Dashboard
            </Link>
            <Link
              to="/admin/entries"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Manage Entries
            </Link>
            <Link
              to="/admin/settings"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Tournament Settings
            </Link>
          </div>
        </div>
      )}
      
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Welcome to the King Ideation Tournament
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {!user ? (
            <>
              Start by creating an account and then you can submit your designs.
              {tournamentState?.currentPhase === 'submission' && (
                <span className="block mt-2 text-primary-600">
                  Submission phase ends in {formatDistanceToNow(tournamentState.submissionPhaseEnd, { addSuffix: true })}
                </span>
              )}
              {tournamentState?.currentPhase === 'voting' && (
                <span className="block mt-2 text-primary-600">
                  Voting phase ends in {formatDistanceToNow(tournamentState.votingPhaseEnd, { addSuffix: true })}
                </span>
              )}
            </>
          ) : (
            <>
              {tournamentState?.currentPhase === 'submission' && (
                <span className="block mt-2 text-primary-600">
                  Submission phase ends in {formatDistanceToNow(tournamentState.submissionPhaseEnd, { addSuffix: true })}
                </span>
              )}
              {tournamentState?.currentPhase === 'voting' && (
                <span className="block mt-2 text-primary-600">
                  Voting phase ends in {formatDistanceToNow(tournamentState.votingPhaseEnd, { addSuffix: true })}
                </span>
              )}
            </>
          )}
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          {!user ? (
            <div className="rounded-md shadow">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
          ) : tournamentState?.currentPhase === 'submission' ? (
            <div className="rounded-md shadow">
              <Link
                to="/submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Submit Your Design
              </Link>
            </div>
          ) : tournamentState?.currentPhase === 'voting' ? (
            <div className="rounded-md shadow">
              <Link
                to="/vote"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Vote Now
              </Link>
            </div>
          ) : null}
        </div>
      </div>

      {entries.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Recent Entries</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
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
                    <div className="text-sm text-gray-500">
                      Submitted {formatDistanceToNow(entry.createdAt.toDate(), { addSuffix: true })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 