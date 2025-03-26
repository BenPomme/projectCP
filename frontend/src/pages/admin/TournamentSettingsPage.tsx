import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getTournamentState, updateTournamentState, TournamentState, initializeTournamentState } from '../../services/firebase';
import { format } from 'date-fns';
import { db } from '../../config/firebase';
import { collection, query, where, getDocs, doc, getDoc, Timestamp } from 'firebase/firestore';

interface Stats {
  totalEntries: number;
  pendingEntries: number;
  approvedEntries: number;
  rejectedEntries: number;
  totalVotes: number;
  totalUsers: number;
}

export default function TournamentSettingsPage() {
  const { user } = useAuth();
  const [tournamentState, setTournamentState] = useState<TournamentState | null>(null);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats>({
    totalEntries: 0,
    pendingEntries: 0,
    approvedEntries: 0,
    rejectedEntries: 0,
    totalVotes: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchTournamentState();
        await fetchStats();
      } catch (err: any) {
        setError(err.message || 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);

  const fetchTournamentState = async () => {
    try {
      setLoading(true);
      const state = await getTournamentState();
      
      if (!state) {
        // Initialize tournament state if it doesn't exist
        await initializeTournamentState();
        const newState = await getTournamentState();
        setTournamentState(newState);
      } else {
        setTournamentState(state);
      }
    } catch (err: any) {
      console.error('Error fetching tournament state:', err);
      setError(err.message || 'Failed to fetch tournament state');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      setStatsLoading(true);
      
      // Get entries stats
      const entriesQuery = query(collection(db, 'entries'));
      const entriesSnapshot = await getDocs(entriesQuery);
      const entries = entriesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const pendingEntries = entries.filter(entry => entry.status === 'pending' || !entry.status).length;
      const approvedEntries = entries.filter(entry => entry.status === 'approved').length;
      const rejectedEntries = entries.filter(entry => entry.status === 'rejected').length;
      
      // Get votes stats
      const votesQuery = query(collection(db, 'votes'));
      const votesSnapshot = await getDocs(votesQuery);
      
      // Get users stats
      const usersQuery = query(collection(db, 'users'));
      const usersSnapshot = await getDocs(usersQuery);
      
      setStats({
        totalEntries: entries.length,
        pendingEntries,
        approvedEntries,
        rejectedEntries,
        totalVotes: votesSnapshot.docs.length,
        totalUsers: usersSnapshot.docs.length,
      });
    } catch (err: any) {
      console.error('Error fetching stats:', err);
    } finally {
      setStatsLoading(false);
    }
  };

  const handlePhaseChange = async (phase: 'submission' | 'voting' | 'completed') => {
    try {
      setError(null);
      setSuccess(null);

      const now = new Date();
      let submissionPhaseEnd = tournamentState?.submissionPhaseEnd || new Date();
      let votingPhaseEnd = tournamentState?.votingPhaseEnd || new Date();

      if (phase === 'submission') {
        submissionPhaseEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
        votingPhaseEnd = new Date(submissionPhaseEnd.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after submission
      } else if (phase === 'voting') {
        if (phase !== tournamentState?.currentPhase) {
          // Only update votingEnd if we're changing to voting phase
          votingPhaseEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
        }
      }

      await updateTournamentState({
        currentPhase: phase,
        submissionPhaseEnd,
        votingPhaseEnd,
      });

      setSuccess(`Tournament phase updated to ${phase}`);
      await fetchTournamentState();
    } catch (err: any) {
      console.error('Error updating tournament phase:', err);
      setError(err.message || 'Failed to update tournament phase');
    }
  };

  const handleDateUpdate = async (phase: 'submission' | 'voting', field: 'Start' | 'End', date: Date) => {
    try {
      setError(null);
      setSuccess(null);

      const update: Partial<TournamentState> = {};
      update[`${phase}Phase${field}`] = date;

      await updateTournamentState(update);

      setSuccess(`${phase} phase ${field.toLowerCase()} time updated`);
      await fetchTournamentState();
    } catch (err: any) {
      console.error(`Error updating ${phase} phase ${field.toLowerCase()} time:`, err);
      setError(err.message || `Failed to update ${phase} phase ${field.toLowerCase()} time`);
    }
  };

  const handleEntryLimitChange = async (value: string) => {
    const maxEntries = value === '' ? null : parseInt(value);
    await updateTournamentState({ maxEntriesPerUser: maxEntries });
  };

  const handleVoteLimitChange = async (value: string) => {
    const maxVotes = value === '' ? null : parseInt(value);
    await updateTournamentState({ maxVotesPerUser: maxVotes });
  };

  const handleVotingQuestionChange = async (value: string) => {
    await updateTournamentState({ votingQuestion: value });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Tournament Settings</h1>
      
      {/* Existing phase controls */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Phase Management</h2>
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current Phase</h2>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handlePhaseChange('submission')}
                className={`px-4 py-2 rounded-md ${
                  tournamentState?.currentPhase === 'submission'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Submission Phase
              </button>
              <button
                onClick={() => handlePhaseChange('voting')}
                className={`px-4 py-2 rounded-md ${
                  tournamentState?.currentPhase === 'voting'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Voting Phase
              </button>
              <button
                onClick={() => handlePhaseChange('completed')}
                className={`px-4 py-2 rounded-md ${
                  tournamentState?.currentPhase === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {tournamentState?.currentPhase === 'submission' && 'Users can submit designs during this phase.'}
              {tournamentState?.currentPhase === 'voting' && 'Submissions are closed. Users can vote on designs during this phase.'}
              {tournamentState?.currentPhase === 'completed' && 'The tournament is over. No new submissions or votes are accepted.'}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Phase Timing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Submission Phase Timing */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Submission Phase</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Time</label>
                    <input
                      type="datetime-local"
                      value={tournamentState?.submissionPhaseStart ? format(tournamentState.submissionPhaseStart, "yyyy-MM-dd'T'HH:mm") : ''}
                      onChange={(e) => handleDateUpdate('submission', 'Start', new Date(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">End Time</label>
                    <input
                      type="datetime-local"
                      value={tournamentState?.submissionPhaseEnd ? format(tournamentState.submissionPhaseEnd, "yyyy-MM-dd'T'HH:mm") : ''}
                      onChange={(e) => handleDateUpdate('submission', 'End', new Date(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Voting Phase Timing */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-md font-medium text-gray-700 mb-4">Voting Phase</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Time</label>
                    <input
                      type="datetime-local"
                      value={tournamentState?.votingPhaseStart ? format(tournamentState.votingPhaseStart, "yyyy-MM-dd'T'HH:mm") : ''}
                      onChange={(e) => handleDateUpdate('voting', 'Start', new Date(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">End Time</label>
                    <input
                      type="datetime-local"
                      value={tournamentState?.votingPhaseEnd ? format(tournamentState.votingPhaseEnd, "yyyy-MM-dd'T'HH:mm") : ''}
                      onChange={(e) => handleDateUpdate('voting', 'End', new Date(e.target.value))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New settings section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Entry & Voting Limits</h2>
        
        {/* Entry Limit */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Entries per User
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={tournamentState?.maxEntriesPerUser || ''}
              onChange={(e) => handleEntryLimitChange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Leave empty for unlimited"
            />
            <span className="text-sm text-gray-500">
              {tournamentState?.maxEntriesPerUser === null ? 'Unlimited' : 'entries'}
            </span>
          </div>
        </div>

        {/* Vote Limit */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Maximum Votes per User
          </label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              value={tournamentState?.maxVotesPerUser || ''}
              onChange={(e) => handleVoteLimitChange(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Leave empty for unlimited"
            />
            <span className="text-sm text-gray-500">
              {tournamentState?.maxVotesPerUser === null ? 'Unlimited' : 'votes'}
            </span>
          </div>
        </div>

        {/* Voting Question */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Voting Question
          </label>
          <input
            type="text"
            value={tournamentState?.votingQuestion || ''}
            onChange={(e) => handleVotingQuestionChange(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter the question to display above the voting scale"
          />
        </div>
      </div>

      {/* Tournament Statistics */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Tournament Statistics</h2>
        
        {statsLoading ? (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-blue-700">Submissions</h3>
              <p className="mt-2 text-2xl font-bold text-blue-800">{stats.totalEntries}</p>
              <div className="mt-2 flex justify-between">
                <span className="text-sm text-blue-600">
                  {stats.approvedEntries} Approved
                </span>
                <span className="text-sm text-blue-600">
                  {stats.pendingEntries} Pending
                </span>
              </div>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-green-700">Votes</h3>
              <p className="mt-2 text-2xl font-bold text-green-800">{stats.totalVotes}</p>
              <div className="mt-2">
                <span className="text-sm text-green-600">
                  {stats.totalVotes > 0 && stats.approvedEntries > 0 
                    ? (stats.totalVotes / stats.approvedEntries).toFixed(1) 
                    : 0} Votes per Entry
                </span>
              </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-md font-medium text-purple-700">Users</h3>
              <p className="mt-2 text-2xl font-bold text-purple-800">{stats.totalUsers}</p>
              <div className="mt-2">
                <span className="text-sm text-purple-600">
                  {(stats.totalEntries / Math.max(1, stats.totalUsers)).toFixed(2)} Submissions per User
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 