import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Entry, TournamentState, getTournaments, initializeTournamentState, getEntriesForTournament } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';
import CreateTournamentForm from '../components/CreateTournamentForm';

export default function HomePage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tournaments, setTournaments] = useState<TournamentState[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch tournaments
        console.log("Fetching tournaments for HomePage...");
        const tournamentsData = await getTournaments();
        setTournaments(tournamentsData);
        
        // If no tournaments, create a default one
        if (tournamentsData.length === 0) {
          console.log("No tournaments found, initializing default tournament...");
          await initializeTournamentState();
          const updatedTournaments = await getTournaments();
          setTournaments(updatedTournaments);
        }

        // Only fetch entries if we have tournaments
        if (tournamentsData.length > 0) {
          // Find a tournament in submission or voting phase to showcase entries from
          const showcaseTournament = tournamentsData.find(t => 
            t.currentPhase === 'submission' || t.currentPhase === 'voting'
          );
          
          if (showcaseTournament) {
            console.log(`Fetching recent entries for showcase tournament ${showcaseTournament.id}...`);
            const entriesData = await getEntriesForTournament(showcaseTournament.id);
            // Limit to 6 entries
            setEntries(entriesData.slice(0, 6));
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load tournaments. Please try refreshing the page.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get active tournaments (in submission or voting phase)
  const activeTournaments = tournaments.filter(t => 
    t.currentPhase === 'submission' || t.currentPhase === 'voting' || t.currentPhase === 'completed'
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
        
        <button 
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
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
                        to={`/tournament/${tournament.id}/results`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                      >
                        View Results
                      </Link>
                    )}
                    
                    {(tournament.ownerId === user?.id || user?.isAdmin) && (
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
                {entry.imageUrl && (
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-48 object-cover"
                  />
                )}
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
                      {entry.voteCount || 0} votes
                    </div>
                    <div className="text-sm text-gray-500">
                      Submitted {formatDistanceToNow(
                        entry.createdAt instanceof Date 
                          ? entry.createdAt 
                          : entry.createdAt.toDate(), 
                        { addSuffix: true }
                      )}
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