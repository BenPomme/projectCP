import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { getTournamentState, updateTournamentState, TournamentState } from '../../services/firebase';
import { format } from 'date-fns';

export default function TournamentSettingsPage() {
  const { user } = useAuth();
  const [tournamentState, setTournamentState] = useState<TournamentState | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    fetchTournamentState();
  }, []);

  const fetchTournamentState = async () => {
    try {
      const state = await getTournamentState();
      setTournamentState(state);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePhaseChange = async (phase: 'submission' | 'voting' | 'completed') => {
    try {
      setError(null);
      setSuccess(null);

      const now = new Date();
      let submissionEnd = tournamentState?.submissionPhaseEnd || new Date();
      let votingEnd = tournamentState?.votingPhaseEnd || new Date();

      if (phase === 'submission') {
        submissionEnd = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
        votingEnd = new Date(submissionEnd.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days after submission
      } else if (phase === 'voting') {
        votingEnd = new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000); // 2 days from now
      }

      await updateTournamentState({
        currentPhase: phase,
        submissionPhaseEnd: submissionEnd,
        votingPhaseEnd: votingEnd
      });

      setSuccess('Tournament phase updated successfully');
      await fetchTournamentState();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleTimeUpdate = async (phase: 'submission' | 'voting', days: number) => {
    try {
      setError(null);
      setSuccess(null);

      const now = new Date();
      const endDate = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

      await updateTournamentState({
        [`${phase}PhaseEnd`]: endDate
      });

      setSuccess(`${phase} phase end time updated successfully`);
      await fetchTournamentState();
    } catch (err: any) {
      setError(err.message);
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
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Tournament Settings</h1>

        {error && (
          <div className="mb-4 p-4 bg-red-50 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-4 p-4 bg-green-50 rounded-md">
            <p className="text-sm text-green-700">{success}</p>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Current Phase</h2>
            <div className="flex space-x-4">
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
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Phase Timers</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Submission Phase End</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {tournamentState?.submissionPhaseEnd
                    ? format(tournamentState.submissionPhaseEnd, 'PPP p')
                    : 'Not set'}
                </p>
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleTimeUpdate('submission', 1)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    1 Day
                  </button>
                  <button
                    onClick={() => handleTimeUpdate('submission', 2)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    2 Days
                  </button>
                  <button
                    onClick={() => handleTimeUpdate('submission', 7)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    1 Week
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500">Voting Phase End</h3>
                <p className="mt-1 text-sm text-gray-900">
                  {tournamentState?.votingPhaseEnd
                    ? format(tournamentState.votingPhaseEnd, 'PPP p')
                    : 'Not set'}
                </p>
                <div className="mt-2 flex space-x-2">
                  <button
                    onClick={() => handleTimeUpdate('voting', 1)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    1 Day
                  </button>
                  <button
                    onClick={() => handleTimeUpdate('voting', 2)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    2 Days
                  </button>
                  <button
                    onClick={() => handleTimeUpdate('voting', 7)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    1 Week
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 