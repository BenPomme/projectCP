import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Entry, TournamentState, initializeTournamentState, getEntriesForTournament, getAllTournaments, getApprovedEntriesForTournament } from '../services/firebase';
import { formatDistanceToNow, format } from 'date-fns';
import CreateTournamentForm from '../components/CreateTournamentForm';

export default function HomePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [tournaments, setTournaments] = useState<TournamentState[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showcaseEntries, setShowcaseEntries] = useState<TournamentEntry[]>([]);
  const [showcaseLoading, setShowcaseLoading] = useState(true);
  
  // Separate active and closed tournaments
  const activeTournaments = tournaments.filter(t => t.currentPhase !== 'completed');
  const closedTournaments = tournaments.filter(t => t.currentPhase === 'completed');

  useEffect(() => {
    const fetchTournaments = async () => {
      console.log('Fetching tournaments for HomePage...');
      setLoading(true);
      
      try {
        const tournamentsData = await getAllTournaments();
        setTournaments(tournamentsData);
        
        // Find a tournament to showcase (prefer first active tournament, or first closed one if no active ones)
        const showcaseTournament = tournamentsData.find(t => t.currentPhase !== 'completed') || 
                                  tournamentsData[0];
        
        if (showcaseTournament) {
          console.log(`Fetching recent entries for showcase tournament ${showcaseTournament.id}...`);
          
          const entries = await getApprovedEntriesForTournament(showcaseTournament.id);
          
          // Sort by creation date descending and take the first 3
          const recentEntries = entries
            .sort((a, b) => {
              // Handle different date formats safely
              if (a.createdAt && b.createdAt) {
                // If createdAt is a Firestore timestamp with toMillis method
                if (typeof a.createdAt.toMillis === 'function' && typeof b.createdAt.toMillis === 'function') {
                  return b.createdAt.toMillis() - a.createdAt.toMillis();
                }
                // If createdAt is a Date object
                if (a.createdAt instanceof Date && b.createdAt instanceof Date) {
                  return b.createdAt.getTime() - a.createdAt.getTime();
                }
                // If createdAt is a timestamp number
                if (typeof a.createdAt === 'number' && typeof b.createdAt === 'number') {
                  return b.createdAt - a.createdAt;
                }
              }
              // Fallback: assume newer entries are at the beginning
              return 0;
            })
            .slice(0, 3);
            
          setShowcaseEntries(recentEntries);
        }
      } catch (err: any) {
        console.error('Error fetching tournaments:', err);
        setError('Failed to load tournaments');
      } finally {
        setLoading(false);
        setShowcaseLoading(false);
      }
    };
    
    fetchTournaments();
  }, []);

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
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Welcome to King Ideation Platform</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Share ideas, submit your best designs, and collaborate on innovative solutions.
        </p>
        
        {user && (
          <div className="mt-8">
            <button
              onClick={() => navigate('/create-tournament')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              Create New Tournament
            </button>
          </div>
        )}
      </div>
      
      {/* Showcase section */}
      {showcaseEntries.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {showcaseEntries.map(entry => (
              <div key={entry.id} className="bg-white overflow-hidden shadow rounded-lg">
                <img 
                  src={entry.imageUrl} 
                  alt={entry.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{entry.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">By {entry.authorName || 'Anonymous'}</p>
                  <p className="text-gray-500 text-sm">{entry.description?.substring(0, 100)}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active Tournaments Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Tournaments</h2>
        
        {loading ? (
          <div className="animate-pulse">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-32 rounded-lg mb-4"></div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        ) : activeTournaments.length === 0 ? (
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <p className="text-gray-600">No active tournaments found.</p>
            {user && (
              <button
                onClick={() => navigate('/create-tournament')}
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Create Tournament
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{tournament.name}</h3>
                    <div className="flex space-x-1">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        tournament.currentPhase === 'submission' 
                          ? 'bg-blue-100 text-blue-800' 
                          : tournament.currentPhase === 'voting'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {tournament.currentPhase === 'submission' ? 'Submission' : 
                         tournament.currentPhase === 'voting' ? 'Voting' : 'Completed'}
                      </span>
                      
                      {tournament.isPasswordProtected && (
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          Private
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {tournament.description || 'No description provided.'}
                  </p>
                  
                  <div className="mt-4 text-sm text-gray-500 space-y-1">
                    {tournament.currentPhase === 'submission' && (
                      <div>
                        <span>Submission ends: </span>
                        <span>{format(tournament.submissionPhaseEnd, 'PPP')}</span>
                      </div>
                    )}
                    
                    {tournament.currentPhase === 'voting' && (
                      <div>
                        <span>Voting ends: </span>
                        <span>{format(tournament.votingPhaseEnd, 'PPP')}</span>
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
                    
                    <Link
                      to={`/tournament/${tournament.id}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                    
                    {(tournament.ownerId === user?.id) && (
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
        )}
      </div>
      
      {/* Closed Tournaments Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Closed Tournaments</h2>
        
        {loading ? (
          <div className="animate-pulse">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-gray-200 h-32 rounded-lg mb-4"></div>
            ))}
          </div>
        ) : closedTournaments.length === 0 ? (
          <div className="bg-white overflow-hidden shadow rounded-lg p-6 text-center">
            <p className="text-gray-600">No closed tournaments found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {closedTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{tournament.name}</h3>
                    <div className="flex space-x-1">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                        Completed
                      </span>
                      
                      {tournament.isPasswordProtected && (
                        <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          Private
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {tournament.description || 'No description provided.'}
                  </p>
                  
                  <div className="mt-4 text-sm text-gray-500 space-y-1">
                    <div>
                      <span>Completed on: </span>
                      <span>{format(tournament.votingPhaseEnd, 'PPP')}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <Link
                      to={`/tournament/${tournament.id}/results`}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                    >
                      View Results
                    </Link>
                    
                    <Link
                      to={`/tournament/${tournament.id}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                    
                    {(tournament.ownerId === user?.id) && (
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
        )}
      </div>
    </div>
  );
} 