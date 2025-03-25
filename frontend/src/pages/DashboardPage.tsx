import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { db } from '../config/firebase';
import { collection, query, where, getDocs, orderBy } from 'firebase/firestore';
import { getTournamentState } from '../services/firebase';
import { formatDistanceToNow } from 'date-fns';

interface Entry {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  createdAt: any;
  status: 'pending' | 'approved' | 'rejected';
  voteCount: number;
  averageRating: number;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [votesRemaining, setVotesRemaining] = useState<number>(0);
  const [tournamentState, setTournamentState] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user) {
      fetchUserEntries();
      fetchVotesRemaining();
      fetchTournamentState();
    }
  }, [user]);

  const fetchTournamentState = async () => {
    try {
      const state = await getTournamentState();
      setTournamentState(state);
    } catch (err) {
      console.error('Error fetching tournament state:', err);
    }
  };

  const fetchUserEntries = async () => {
    try {
      const entriesQuery = query(
        collection(db, 'entries'),
        where('userId', '==', user!.id),
        orderBy('createdAt', 'desc')
      );
      
      const entriesSnapshot = await getDocs(entriesQuery);
      const entriesData = entriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Entry[];
      
      setEntries(entriesData);
    } catch (err: any) {
      console.error('Error fetching user entries:', err);
      setError(err.message || 'Failed to load your submissions.');
    } finally {
      setLoading(false);
    }
  };

  const fetchVotesRemaining = async () => {
    try {
      const votesQuery = query(
        collection(db, 'votes'),
        where('userId', '==', user!.id)
      );
      
      const votesSnapshot = await getDocs(votesQuery);
      const totalVotes = votesSnapshot.size;
      
      setVotesRemaining(Math.max(0, 10 - totalVotes));
    } catch (err) {
      console.error('Error fetching votes:', err);
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
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      
      {error && (
        <div className="mt-4 rounded-md bg-red-50 p-4">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Tournament Info */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Tournament Status</h2>
          
          {tournamentState ? (
            <div>
              <div className="mb-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {tournamentState.currentPhase === 'submission'
                    ? 'Submission Phase'
                    : tournamentState.currentPhase === 'voting'
                    ? 'Voting Phase'
                    : 'Completed'}
                </span>
              </div>
              
              {tournamentState.currentPhase === 'submission' && (
                <div className="text-sm text-gray-500">
                  <p className="mb-1">Submission deadline:</p>
                  <p className="font-medium text-gray-900">
                    {formatDistanceToNow(tournamentState.submissionPhaseEnd, { addSuffix: true })}
                  </p>
                </div>
              )}
              
              {tournamentState.currentPhase === 'voting' && (
                <div className="text-sm text-gray-500">
                  <p className="mb-1">Voting ends:</p>
                  <p className="font-medium text-gray-900">
                    {formatDistanceToNow(tournamentState.votingPhaseEnd, { addSuffix: true })}
                  </p>
                  <p className="mt-4 mb-1">Your remaining votes:</p>
                  <p className="font-medium text-gray-900">{votesRemaining} of 10</p>
                </div>
              )}
              
              <div className="mt-6">
                {tournamentState.currentPhase === 'submission' && (
                  <Link
                    to="/submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Submit a Design
                  </Link>
                )}
                
                {tournamentState.currentPhase === 'voting' && (
                  <Link
                    to="/vote"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                  >
                    Vote on Designs
                  </Link>
                )}
                
                {tournamentState.currentPhase === 'completed' && (
                  <Link
                    to="/winners"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                  >
                    View Winners
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Loading tournament information...</p>
          )}
        </div>
        
        {/* User Profile */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Profile</h2>
          
          <div className="flex items-center space-x-4 mb-6">
            {user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || 'User avatar'}
                className="h-16 w-16 rounded-full"
              />
            ) : (
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                <span className="text-2xl font-medium text-primary-600">
                  {user?.displayName?.[0]?.toUpperCase() || user?.email?.[0]?.toUpperCase() || '?'}
                </span>
              </div>
            )}
            
            <div>
              <h3 className="text-md font-medium text-gray-900">
                {user?.displayName || 'User'}
              </h3>
              <p className="text-sm text-gray-500">{user?.email}</p>
            </div>
          </div>
          
          <Link
            to="/profile"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            View Full Profile
          </Link>
        </div>
      </div>
      
      {/* User Submissions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Your Submissions</h2>
        
        {entries.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map((entry) => (
              <div key={entry.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-48 object-contain bg-gray-50"
                  />
                  <div className={`
                    absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full
                    ${entry.status === 'approved' ? 'bg-green-100 text-green-800' : 
                      entry.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                      'bg-yellow-100 text-yellow-800'}
                  `}>
                    {entry.status === 'approved' ? 'Approved' : 
                     entry.status === 'rejected' ? 'Rejected' : 
                     'Pending'}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">{entry.title}</h3>
                  {entry.description && (
                    <p className="mt-1 text-sm text-gray-500">{entry.description}</p>
                  )}
                  
                  <div className="mt-4 flex items-center justify-between text-sm">
                    <div className="text-gray-500">
                      Submitted {formatDistanceToNow(entry.createdAt.toDate(), { addSuffix: true })}
                    </div>
                    
                    {tournamentState?.currentPhase !== 'submission' && entry.status === 'approved' && (
                      <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 text-gray-600">
                          {entry.voteCount} votes
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-10 text-center">
            <p className="text-gray-500">You haven't submitted any designs yet.</p>
            
            {tournamentState?.currentPhase === 'submission' && (
              <div className="mt-4">
                <Link
                  to="/submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                >
                  Submit Your First Design
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 