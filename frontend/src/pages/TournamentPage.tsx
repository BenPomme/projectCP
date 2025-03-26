import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getTournamentById, getEntriesForTournament, Entry, TournamentState } from '../services/firebase';
import { useAuthStore } from '../store/authStore';
import { formatDistanceToNow } from 'date-fns';

export default function TournamentPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const { user } = useAuthStore();
  const [tournament, setTournament] = useState<TournamentState | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!tournamentId) {
        setError('Tournament ID is missing');
        setLoading(false);
        return;
      }

      try {
        // Fetch tournament details
        const tournamentData = await getTournamentById(tournamentId);
        if (!tournamentData) {
          setError('Tournament not found');
          setLoading(false);
          return;
        }
        
        setTournament(tournamentData);
        
        // Fetch entries for this tournament
        const entriesData = await getEntriesForTournament(tournamentId);
        setEntries(entriesData);
        
      } catch (err: any) {
        console.error('Error fetching tournament data:', err);
        setError(err.message || 'Failed to load tournament data');
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [tournamentId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !tournament) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error || 'Tournament not found'}</p>
          <Link to="/" className="mt-4 inline-block text-primary-600 hover:text-primary-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h1 className="text-3xl font-bold text-gray-900">{tournament.name}</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Created by: {tournament.ownerId === user?.id ? 'You' : 'Another user'}
          </p>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Current Phase</dt>
              <dd className="mt-1 text-sm text-gray-900 capitalize">{tournament.currentPhase}</dd>
            </div>
            
            {tournament.currentPhase === 'submission' && (
              <>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Submission Deadline</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {formatDistanceToNow(tournament.submissionPhaseEnd, { addSuffix: true })}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Entry Limit</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {tournament.maxEntriesPerUser === null 
                      ? 'Unlimited entries per user' 
                      : `Maximum ${tournament.maxEntriesPerUser} ${tournament.maxEntriesPerUser === 1 ? 'entry' : 'entries'} per user`}
                  </dd>
                </div>
              </>
            )}
            
            {tournament.currentPhase === 'voting' && (
              <>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500">Voting Deadline</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {formatDistanceToNow(tournament.votingPhaseEnd, { addSuffix: true })}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Vote Limit</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {tournament.maxVotesPerUser === null 
                      ? 'Unlimited votes per user' 
                      : `Maximum ${tournament.maxVotesPerUser} ${tournament.maxVotesPerUser === 1 ? 'vote' : 'votes'} per user`}
                  </dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500">Voting Question</dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    {tournament.votingQuestion || "How would you rate this entry?"}
                  </dd>
                </div>
              </>
            )}
          </dl>
        </div>
        
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <div className="flex space-x-4">
            {tournament.currentPhase === 'submission' && (
              <Link
                to={`/tournament/${tournament.id}/submit`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Submit Entry
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
            
            {(tournament.ownerId === user?.id || user?.isAdmin) && (
              <Link
                to={`/admin/tournament/${tournament.id}/settings`}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Manage Tournament
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Entries Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {entries.length > 0 ? 'Entries' : 'No entries yet'}
        </h2>
        
        {entries.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white shadow overflow-hidden rounded-lg">
                <div className="w-full h-48">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="text-lg font-medium text-gray-900">{entry.title}</h3>
                  {entry.description && (
                    <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
                  )}
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {entry.voteCount} {entry.voteCount === 1 ? 'vote' : 'votes'}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(entry.createdAt.toDate(), { addSuffix: true })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : tournament.currentPhase === 'submission' ? (
          <div className="bg-white shadow overflow-hidden rounded-lg p-6 text-center">
            <p className="text-gray-500">
              No entries yet. Be the first to submit an entry!
            </p>
            <Link
              to={`/tournament/${tournament.id}/submit`}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
            >
              Submit Entry
            </Link>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden rounded-lg p-6 text-center">
            <p className="text-gray-500">
              No entries were submitted during the submission phase.
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 