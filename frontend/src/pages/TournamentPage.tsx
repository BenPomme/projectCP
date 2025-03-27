import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getTournamentById, getEntriesForTournament } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '../hooks/useAuth';
import TournamentPasswordPrompt from '../components/TournamentPasswordPrompt';

export default function TournamentPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState<any>(null);
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [hasAccessPermission, setHasAccessPermission] = useState(false);

  useEffect(() => {
    const fetchTournament = async () => {
      if (!tournamentId) {
        setError('Tournament ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        console.log(`Fetching tournament with ID: ${tournamentId}`);
        
        // Get tournament details
        const tournamentData = await getTournamentById(tournamentId);
        
        if (!tournamentData) {
          setError('Tournament not found');
          setLoading(false);
          return;
        }
        
        console.log('Tournament data:', tournamentData);
        setTournament(tournamentData);
        
        // Check if tournament is password protected
        if (tournamentData.isPasswordProtected) {
          // Check if user has already provided the password for this tournament
          const hasAccess = localStorage.getItem(`tournament_access_${tournamentId}`) === 'true';
          
          // Check if user is the owner or an admin (they bypass password protection)
          const isOwnerOrAdmin = user?.id === tournamentData.ownerId || user?.isAdmin;
          
          if (hasAccess || isOwnerOrAdmin) {
            // User has permission to access this tournament
            setHasAccessPermission(true);
            
            // Proceed to load entries
            const entriesData = await getEntriesForTournament(tournamentId);
            console.log(`Found ${entriesData.length} entries for tournament ${tournamentId}`);
            setEntries(entriesData);
          } else {
            // Password is required
            setPasswordRequired(true);
          }
        } else {
          // Tournament is not password protected
          setHasAccessPermission(true);
          
          // Get entries for this tournament
          const entriesData = await getEntriesForTournament(tournamentId);
          console.log(`Found ${entriesData.length} entries for tournament ${tournamentId}`);
          setEntries(entriesData);
        }
        
      } catch (err: any) {
        console.error('Error fetching tournament:', err);
        setError('Failed to load tournament data');
      } finally {
        setLoading(false);
      }
    };

    fetchTournament();
  }, [tournamentId, user]);

  // Handle successful password entry
  const handlePasswordSuccess = async () => {
    setPasswordRequired(false);
    setHasAccessPermission(true);
    
    try {
      // Load entries after password is verified
      const entriesData = await getEntriesForTournament(tournamentId!);
      console.log(`Found ${entriesData.length} entries for tournament ${tournamentId}`);
      setEntries(entriesData);
    } catch (err: any) {
      console.error('Error fetching entries:', err);
      setError('Failed to load entries');
    }
  };

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
          onClick={() => navigate('/')}
        >
          Return to Home
        </button>
      </div>
    );
  }

  if (!tournament) {
    return null;
  }

  // Display password prompt if tournament requires a password
  if (passwordRequired && !hasAccessPermission) {
    return (
      <TournamentPasswordPrompt
        tournamentId={tournamentId!}
        tournamentName={tournament.name}
        onPasswordSuccess={handlePasswordSuccess}
      />
    );
  }

  const isUserOwner = user?.id === tournament.ownerId;
  const canManageTournament = isUserOwner || user?.isAdmin;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{tournament.name}</h1>
        
        <div className="mt-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-6">
          <div className="bg-white overflow-hidden shadow rounded-lg p-4 md:w-1/3">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Tournament Details</h2>
            
            <div className="space-y-2">
              <div>
                <span className="text-sm text-gray-500">Current Phase: </span>
                <span className="text-sm font-medium capitalize">{tournament.currentPhase}</span>
              </div>
              
              {tournament.currentPhase === 'submission' && (
                <>
                  <div>
                    <span className="text-sm text-gray-500">Submission Started: </span>
                    <span className="text-sm font-medium">
                      {formatDistanceToNow(tournament.submissionPhaseStart, { addSuffix: true })}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Submission Ends: </span>
                    <span className="text-sm font-medium">
                      {formatDistanceToNow(tournament.submissionPhaseEnd, { addSuffix: true })}
                    </span>
                  </div>
                </>
              )}
              
              {tournament.currentPhase === 'voting' && (
                <>
                  <div>
                    <span className="text-sm text-gray-500">Voting Started: </span>
                    <span className="text-sm font-medium">
                      {formatDistanceToNow(tournament.votingPhaseStart, { addSuffix: true })}
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Voting Ends: </span>
                    <span className="text-sm font-medium">
                      {formatDistanceToNow(tournament.votingPhaseEnd, { addSuffix: true })}
                    </span>
                  </div>
                </>
              )}
              
              {tournament.maxEntriesPerUser !== null && (
                <div>
                  <span className="text-sm text-gray-500">Max Entries Per User: </span>
                  <span className="text-sm font-medium">{tournament.maxEntriesPerUser}</span>
                </div>
              )}
              
              {tournament.maxVotesPerUser !== null && (
                <div>
                  <span className="text-sm text-gray-500">Max Votes Per User: </span>
                  <span className="text-sm font-medium">{tournament.maxVotesPerUser}</span>
                </div>
              )}
            </div>
            
            <div className="mt-6">
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
              
              {canManageTournament && (
                <Link
                  to={`/admin/tournament/${tournament.id}/settings`}
                  className="ml-4 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Manage Tournament
                </Link>
              )}
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg p-4 md:w-2/3">
            <h2 className="text-lg font-medium text-gray-900 mb-2">Entries ({entries.length})</h2>
            
            {entries.length === 0 ? (
              <p className="text-sm text-gray-500">No entries have been submitted yet.</p>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {entries.map((entry) => (
                  <div
                    key={entry.id}
                    className="border border-gray-200 rounded-md p-3"
                  >
                    {entry.imageUrl && (
                      <img
                        src={entry.imageUrl}
                        alt={entry.title}
                        className="w-full h-32 object-cover rounded-md mb-2"
                      />
                    )}
                    <h3 className="text-sm font-medium text-gray-900">{entry.title}</h3>
                    {entry.description && (
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2">{entry.description}</p>
                    )}
                    <div className="mt-2 flex justify-between items-center text-xs text-gray-500">
                      <span>{entry.voteCount || 0} votes</span>
                      <span>{formatDistanceToNow(
                        entry.createdAt instanceof Date 
                          ? entry.createdAt 
                          : entry.createdAt.toDate(), 
                        { addSuffix: true }
                      )}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Link
        to="/"
        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-primary-700 hover:text-primary-800"
      >
        ← Back to tournaments
      </Link>
    </div>
  );
} 