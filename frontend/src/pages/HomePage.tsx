import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Entry, TournamentState, getTournaments, initializeTournamentState } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';
import CreateTournamentForm from '../components/CreateTournamentForm';

export default function HomePage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tournaments, setTournaments] = useState<TournamentState[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch tournaments
        const tournamentsData = await getTournaments();
        setTournaments(tournamentsData);
        
        // If no tournaments, create a default one
        if (tournamentsData.length === 0) {
          await initializeTournamentState();
          const updatedTournaments = await getTournaments();
          setTournaments(updatedTournaments);
        }

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

  // Get active tournaments (in submission or voting phase)
  const activeTournaments = tournaments.filter(t => 
    t.currentPhase === 'submission' || t.currentPhase === 'completed'
  );

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
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          King Ideation Tournament Platform
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {!user ? (
            <>
              Start by creating an account and then you can submit your designs or create your own tournament.
            </>
          ) : (
            <>
              Join an existing tournament or create your own.
            </>
          )}
        </p>
        {!user ? (
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <button
              onClick={() => setShowCreateForm(!showCreateForm)}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
            >
              {showCreateForm ? 'Hide Form' : 'Create Your Tournament'}
            </button>
          </div>
        )}
      </div>

      {/* Tournament Creation Form */}
      {showCreateForm && user && (
        <div className="mb-12">
          <CreateTournamentForm />
        </div>
      )}

      {/* Active Tournaments */}
      {activeTournaments.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Tournaments</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activeTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">{tournament.name}</h3>
                  
                  <div className="mt-4 flex flex-col space-y-2">
                    <div className="text-sm text-gray-500">
                      Phase: <span className="font-medium capitalize">{tournament.currentPhase}</span>
                    </div>
                    
                    {tournament.currentPhase === 'submission' && (
                      <div className="text-sm text-gray-500">
                        Submission ends: <span className="font-medium">{formatDistanceToNow(tournament.submissionPhaseEnd, { addSuffix: true })}</span>
                      </div>
                    )}
                    
                    {tournament.currentPhase === 'voting' && (
                      <div className="text-sm text-gray-500">
                        Voting ends: <span className="font-medium">{formatDistanceToNow(tournament.votingPhaseEnd, { addSuffix: true })}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    {tournament.currentPhase === 'submission' && (
                      <Link
                        to={`/tournament/${tournament.id}/submit`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Submit Design
                      </Link>
                    )}
                    
                    {tournament.currentPhase === 'voting' && (
                      <Link
                        to={`/tournament/${tournament.id}/vote`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        Vote Now
                      </Link>
                    )}
                    
                    {tournament.currentPhase === 'completed' && (
                      <Link
                        to={`/tournament/${tournament.id}/winners`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        View Results
                      </Link>
                    )}
                    
                    {tournament.ownerId === user?.id && (
                      <Link
                        to={`/admin/tournament/${tournament.id}/settings`}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Manage
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Entries */}
      {entries.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Entries</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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