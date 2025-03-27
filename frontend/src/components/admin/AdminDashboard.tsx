import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTournamentState, TournamentState } from '../../services/firebase';
import { format } from 'date-fns';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tournaments');
  const [tournamentState, setTournamentState] = useState<TournamentState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTournamentState = async () => {
      try {
        const state = await getTournamentState();
        setTournamentState(state);
      } catch (error) {
        console.error('Error fetching tournament state:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTournamentState();
  }, []);

  const getCurrentPhaseName = () => {
    if (!tournamentState) return 'Unknown';

    switch (tournamentState.currentPhase) {
      case 'submission':
        return 'Submission Phase';
      case 'voting':
        return 'Voting Phase';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  const getPhaseTimeRemaining = () => {
    if (!tournamentState) return 'Unknown';

    const now = new Date();
    let endDate;

    if (tournamentState.currentPhase === 'submission') {
      endDate = tournamentState.submissionPhaseEnd;
    } else if (tournamentState.currentPhase === 'voting') {
      endDate = tournamentState.votingPhaseEnd;
    } else {
      return 'Tournament completed';
    }

    const diffMs = endDate.getTime() - now.getTime();
    if (diffMs <= 0) return 'Ended';

    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    return `${diffDays}d ${diffHours}h remaining`;
  };

  const handleNavigateToSettings = () => {
    if (tournamentState && tournamentState.id) {
      navigate(`/admin/tournament/${tournamentState.id}/settings`);
    } else {
      console.error('No tournament ID available for navigation');
      // Fallback to the general settings page
      navigate('/admin/settings');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          
          {/* Navigation tabs */}
          <div className="border-b border-gray-200 mt-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('tournaments')}
                className={`${
                  activeTab === 'tournaments'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Tournament Management
              </button>
              <button
                onClick={() => setActiveTab('entries')}
                className={`${
                  activeTab === 'entries'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Entries
              </button>
              <button
                onClick={() => setActiveTab('users')}
                className={`${
                  activeTab === 'users'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Users
              </button>
            </nav>
          </div>

          {/* Content area */}
          <div className="mt-6">
            {activeTab === 'tournaments' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Tournament Management</h2>
                
                {loading ? (
                  <div className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                  </div>
                ) : (
                  <>
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Current Phase</h3>
                          <p className="mt-1 text-lg font-semibold text-gray-900">{getCurrentPhaseName()}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Status</h3>
                          <p className="mt-1 text-lg font-semibold text-gray-900">{getPhaseTimeRemaining()}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-500">Last Updated</h3>
                          <p className="mt-1 text-lg font-semibold text-gray-900">
                            {tournamentState?.updatedAt ? format(tournamentState.updatedAt, 'PPp') : 'Never'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={handleNavigateToSettings}
                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Manage Tournament Settings
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}

            {activeTab === 'entries' && (
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Entry Management</h2>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => navigate('/admin/entries')}
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Review Submissions
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'users' && (
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Users</h2>
                {/* User management will go here */}
                <div className="text-gray-500">User management features coming soon.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 