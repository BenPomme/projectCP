import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  getTournamentById, 
  updateTournamentState, 
  TournamentState, 
  getEntriesForTournament,
  getTournamentVotes,
  deleteTournament,
  updateTournamentPassword,
} from '../../services/firebase';
import { format } from 'date-fns';
import { db } from '../../config/firebase';
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
import TournamentPasswordPrompt from '../../components/TournamentPasswordPrompt';

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
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const navigate = useNavigate();
  const [tournament, setTournament] = useState<TournamentState | null>(null);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [localVotingQuestion, setLocalVotingQuestion] = useState<string>('');
  const [stats, setStats] = useState<Stats>({
    totalEntries: 0,
    pendingEntries: 0,
    approvedEntries: 0,
    rejectedEntries: 0,
    totalVotes: 0,
    totalUsers: 0,
  });

  // Password protection state
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  // Delete tournament state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');

  // Password access state
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [hasAccessPermission, setHasAccessPermission] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!tournamentId) {
          setError('No tournament ID provided');
          return;
        }
        await fetchTournament();
        await fetchStats();
      } catch (err: any) {
        console.error('Error fetching data:', err);
        setError(err.message || 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, [tournamentId, user]);

  useEffect(() => {
    if (tournament?.votingQuestion !== undefined) {
      setLocalVotingQuestion(tournament.votingQuestion);
    }
    if (tournament?.isPasswordProtected !== undefined) {
      setIsPasswordProtected(tournament.isPasswordProtected);
      if (tournament.password) {
        setPassword(tournament.password);
      }
    }
  }, [tournament]);

  const fetchTournament = async () => {
    try {
      setLoading(true);
      if (!tournamentId) {
        setError('No tournament ID provided');
        return;
      }

      const tournamentData = await getTournamentById(tournamentId);
      
      if (!tournamentData) {
        setError('Tournament not found');
        return;
      }
      
      console.log('Current user:', user);
      console.log('Tournament ownerId:', tournamentData.ownerId);
      console.log('User ID matches owner?', tournamentData.ownerId === user?.id);
      console.log('User is admin?', user?.isAdmin === true);
      
      // Only check permissions if user data is available
      if (user) {
        // Check if user is the owner - only owners can modify tournament settings
        const isOwner = user.id === tournamentData.ownerId;
        
        if (!isOwner) {
          setError('You do not have permission to access this tournament settings. Only the tournament creator can modify settings.');
          return;
        }
      }
      
      setTournament(tournamentData);
      setHasAccessPermission(true);
    } catch (err: any) {
      console.error('Error fetching tournament:', err);
      setError('Failed to load tournament data');
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      if (!tournamentId) return;
      
      setStatsLoading(true);
      
      // Get entries stats for this tournament
      const entries = await getEntriesForTournament(tournamentId);
      
      const pendingEntries = entries.filter(entry => entry.status === 'pending' || !entry.status).length;
      const approvedEntries = entries.filter(entry => entry.status === 'approved').length;
      const rejectedEntries = entries.filter(entry => entry.status === 'rejected').length;
      
      // Get votes stats for this tournament
      const votes = await getTournamentVotes(tournamentId);
      
      // Get users stats (independent of tournament)
      const usersQuery = query(collection(db, 'users'));
      const usersSnapshot = await getDocs(usersQuery);
      
      setStats({
        totalEntries: entries.length,
        pendingEntries,
        approvedEntries,
        rejectedEntries,
        totalVotes: votes.length,
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
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);

      const now = new Date();
      let submissionPhaseEnd = tournament.submissionPhaseEnd || new Date();
      let votingPhaseEnd = tournament.votingPhaseEnd || new Date();

      if (phase === 'submission') {
        submissionPhaseEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
        votingPhaseEnd = new Date(submissionPhaseEnd.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days after submission
      } else if (phase === 'voting') {
        if (phase !== tournament.currentPhase) {
          // Only update votingEnd if we're changing to voting phase
          votingPhaseEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
        }
      }

      await updateTournamentState({
        id: tournament.id,
        currentPhase: phase,
        submissionPhaseEnd,
        votingPhaseEnd,
      });

      setSuccess(`Tournament phase updated to ${phase}`);
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating tournament phase:', err);
      setError(err.message || 'Failed to update tournament phase');
    }
  };

  const handleDateUpdate = async (phase: 'submission' | 'voting', field: 'Start' | 'End', date: Date) => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);

      const update: Partial<TournamentState> = {
        id: tournament.id
      };
      update[`${phase}Phase${field}`] = date;

      await updateTournamentState(update);

      setSuccess(`${phase} phase ${field.toLowerCase()} time updated`);
      await fetchTournament();
    } catch (err: any) {
      console.error(`Error updating ${phase} phase ${field.toLowerCase()} time:`, err);
      setError(err.message || `Failed to update ${phase} phase ${field.toLowerCase()} time`);
    }
  };

  const handleEntryLimitChange = async (value: string) => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);
      const maxEntries = value === '' ? null : parseInt(value);
      await updateTournamentState({ 
        id: tournament.id,
        maxEntriesPerUser: maxEntries 
      });
      setSuccess('Entry limit updated successfully');
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating entry limit:', err);
      setError(err.message || 'Failed to update entry limit');
    }
  };

  const handleVoteLimitChange = async (value: string) => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);
      const maxVotes = value === '' ? null : parseInt(value);
      await updateTournamentState({ 
        id: tournament.id,
        maxVotesPerUser: maxVotes 
      });
      setSuccess('Vote limit updated successfully');
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating vote limit:', err);
      setError(err.message || 'Failed to update vote limit');
    }
  };

  const handleVotingQuestionChange = async (value: string) => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);
      await updateTournamentState({ 
        id: tournament.id,
        votingQuestion: value 
      });
      setSuccess('Voting question updated successfully');
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating voting question:', err);
      setError(err.message || 'Failed to update voting question');
    }
  };

  const handleNameChange = async (value: string) => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);
      await updateTournamentState({ 
        id: tournament.id,
        name: value 
      });
      setSuccess('Tournament name updated successfully');
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating tournament name:', err);
      setError(err.message || 'Failed to update tournament name');
    }
  };

  // Handle password protection change
  const handlePasswordChange = async () => {
    try {
      if (!tournament) return;
      
      setError(null);
      setSuccess(null);
      
      // If enabling password protection, ensure there's a password
      if (isPasswordProtected && !password.trim()) {
        setError('Please enter a password');
        return;
      }
      
      await updateTournamentPassword(
        tournament.id,
        isPasswordProtected,
        isPasswordProtected ? password : null
      );
      
      setSuccess('Password protection settings updated successfully');
      await fetchTournament();
    } catch (err: any) {
      console.error('Error updating password protection:', err);
      setError(err.message || 'Failed to update password protection');
    }
  };
  
  // Handle tournament deletion
  const handleDeleteTournament = async () => {
    try {
      if (!tournament) return;
      
      setError(null);
      
      // Confirm deletion with text matching
      if (deleteConfirmText !== tournament.name) {
        setError('Please enter the tournament name to confirm deletion');
        return;
      }
      
      // Show loading state
      setLoading(true);
      
      await deleteTournament(tournament.id);
      
      // Navigate back to dashboard after deletion
      navigate('/dashboard');
    } catch (err: any) {
      console.error('Error deleting tournament:', err);
      setError(err.message || 'Failed to delete tournament');
      setLoading(false);
    }
  };

  // Handle successful password entry
  const handlePasswordSuccess = () => {
    setPasswordRequired(false);
    setHasAccessPermission(true);
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
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
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
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Tournament Settings</h1>
      <p className="text-gray-600 mb-8">ID: {tournament.id}</p>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
          {success}
        </div>
      )}
      
      {/* Tournament Name */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Tournament Details</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Tournament Name
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              id="name"
              className="focus:ring-primary-500 focus:border-primary-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
              value={tournament.name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>
          <p className="mt-2 text-sm text-gray-500">
            Owner: {tournament.ownerId === user?.id ? 'You' : tournament.ownerId}
          </p>
        </div>
      </div>
      
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
                  tournament.currentPhase === 'submission'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Submission Phase
              </button>
              <button
                onClick={() => handlePhaseChange('voting')}
                className={`px-4 py-2 rounded-md ${
                  tournament.currentPhase === 'voting'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Voting Phase
              </button>
              <button
                onClick={() => handlePhaseChange('completed')}
                className={`px-4 py-2 rounded-md ${
                  tournament.currentPhase === 'completed'
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Completed
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              {tournament.currentPhase === 'submission' && 'Users can submit designs during this phase.'}
              {tournament.currentPhase === 'voting' && 'Submissions are closed. Users can vote on designs during this phase.'}
              {tournament.currentPhase === 'completed' && 'The tournament is over. No new submissions or votes are accepted.'}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">Phase Timing</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-md font-medium text-gray-700 mb-2">Submission Phase</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="submissionStart" className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      id="submissionStart"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      value={format(tournament.submissionPhaseStart, "yyyy-MM-dd'T'HH:mm")}
                      onChange={(e) => handleDateUpdate('submission', 'Start', new Date(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="submissionEnd" className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      id="submissionEnd"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      value={format(tournament.submissionPhaseEnd, "yyyy-MM-dd'T'HH:mm")}
                      onChange={(e) => handleDateUpdate('submission', 'End', new Date(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-md font-medium text-gray-700 mb-2">Voting Phase</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="votingStart" className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <input
                      type="datetime-local"
                      id="votingStart"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      value={format(tournament.votingPhaseStart, "yyyy-MM-dd'T'HH:mm")}
                      onChange={(e) => handleDateUpdate('voting', 'Start', new Date(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="votingEnd" className="block text-sm font-medium text-gray-700">
                      End Date
                    </label>
                    <input
                      type="datetime-local"
                      id="votingEnd"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                      value={format(tournament.votingPhaseEnd, "yyyy-MM-dd'T'HH:mm")}
                      onChange={(e) => handleDateUpdate('voting', 'End', new Date(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Entry & Voting Limits */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Entry & Voting Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="maxEntries" className="block text-sm font-medium text-gray-700">
              Maximum Entries per User
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="maxEntries"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={tournament.maxEntriesPerUser === null ? '' : tournament.maxEntriesPerUser}
                onChange={(e) => handleEntryLimitChange(e.target.value)}
                min="1"
                placeholder="Leave empty for unlimited"
              />
              <p className="mt-1 text-xs text-gray-500">Leave empty for unlimited entries</p>
            </div>
          </div>
          
          <div>
            <label htmlFor="maxVotes" className="block text-sm font-medium text-gray-700">
              Maximum Votes per User
            </label>
            <div className="mt-1">
              <input
                type="number"
                id="maxVotes"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={tournament.maxVotesPerUser === null ? '' : tournament.maxVotesPerUser}
                onChange={(e) => handleVoteLimitChange(e.target.value)}
                min="1"
                placeholder="Leave empty for unlimited"
              />
              <p className="mt-1 text-xs text-gray-500">Leave empty for unlimited votes</p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="votingQuestion" className="block text-sm font-medium text-gray-700">
              Voting Question
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="votingQuestion"
                className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                value={localVotingQuestion}
                onChange={(e) => setLocalVotingQuestion(e.target.value)}
                placeholder="How would you rate this entry?"
              />
              <p className="mt-1 text-xs text-gray-500">This question will be displayed above the voting scale</p>
            </div>
            
            <div className="mt-2">
              <button
                onClick={() => handleVotingQuestionChange(localVotingQuestion)}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Update Voting Question
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Password Protection */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Password Protection</h2>
        <p className="text-sm text-gray-600 mb-4">
          Enable password protection to restrict who can submit entries and vote in your tournament.
          Users will need to enter the password before they can participate.
        </p>
        
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="passwordProtection"
            checked={isPasswordProtected}
            onChange={(e) => setIsPasswordProtected(e.target.checked)}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
          />
          <label htmlFor="passwordProtection" className="ml-2 block text-sm text-gray-900">
            Enable password protection
          </label>
        </div>
        
        {isPasswordProtected && (
          <div className="mt-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Tournament Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10"
                placeholder="Enter password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <button
            onClick={handlePasswordChange}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            Save Password Settings
          </button>
        </div>
      </div>

      {/* Delete Tournament */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-red-200">
        <h2 className="text-xl font-semibold mb-4 text-red-600">Danger Zone</h2>
        <p className="text-sm text-gray-600 mb-4">
          Permanently delete this tournament and all its data. This action cannot be undone.
          All entries, votes, and settings will be permanently removed.
        </p>
        
        <div>
          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Delete Tournament
            </button>
          ) : (
            <div className="border border-red-300 rounded-md p-4 bg-red-50">
              <p className="text-sm text-red-700 mb-2">
                To confirm deletion, please type <strong>{tournament.name}</strong> below:
              </p>
              <input
                type="text"
                value={deleteConfirmText}
                onChange={(e) => setDeleteConfirmText(e.target.value)}
                className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md mb-4"
                placeholder="Enter tournament name to confirm"
              />
              <div className="flex space-x-3">
                <button
                  onClick={handleDeleteTournament}
                  disabled={deleteConfirmText !== tournament.name}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    deleteConfirmText === tournament.name
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                >
                  Permanently Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteConfirmText('');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tournament Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Tournament Statistics</h2>
        {statsLoading ? (
          <div className="animate-pulse py-4">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg text-gray-700">Entries</h3>
              <p className="text-3xl font-bold">{stats.totalEntries}</p>
              <div className="mt-2 text-sm text-gray-500">
                <div>Pending: {stats.pendingEntries}</div>
                <div>Approved: {stats.approvedEntries}</div>
                <div>Rejected: {stats.rejectedEntries}</div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg text-gray-700">Votes</h3>
              <p className="text-3xl font-bold">{stats.totalVotes}</p>
              <div className="mt-2 text-sm text-gray-500">
                <div>Avg. per entry: {stats.totalEntries > 0 ? (stats.totalVotes / stats.totalEntries).toFixed(1) : '0'}</div>
              </div>
            </div>
            
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg text-gray-700">Users</h3>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
              <div className="mt-2 text-sm text-gray-500">
                <div>Contributors: {stats.totalEntries > 0 || stats.totalVotes > 0 ? 'Various' : '0'}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 