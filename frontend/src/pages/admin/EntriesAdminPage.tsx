import { useEffect, useState } from 'react';
import { db } from '../../config/firebase';
import { collection, query, getDocs, doc, updateDoc, orderBy, where } from 'firebase/firestore';
import { useParams, useNavigate } from 'react-router-dom';

interface Entry {
  id: string;
  userId: string;
  userDisplayName: string;
  title: string;
  description: string;
  imageUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: any;
  voteCount: number;
  tournamentId?: string;
}

export default function EntriesAdminPage() {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const navigate = useNavigate();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');
  const [activeTournamentId, setActiveTournamentId] = useState<string | undefined>(tournamentId);

  useEffect(() => {
    if (tournamentId !== activeTournamentId) {
      setActiveTournamentId(tournamentId);
      setEntries([]);
    }
    fetchEntries();
  }, [filter, tournamentId]);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log(`Fetching entries${tournamentId ? ` for tournament ${tournamentId}` : ''}, filter: ${filter}`);

      let entriesQuery;
      
      if (tournamentId) {
        // If we have a tournamentId, filter by that tournament
        if (filter === 'all') {
          entriesQuery = query(
            collection(db, 'entries'), 
            where('tournamentId', '==', tournamentId),
            orderBy('createdAt', 'desc')
          );
        } else {
          entriesQuery = query(
            collection(db, 'entries'),
            where('tournamentId', '==', tournamentId),
            where('status', '==', filter),
            orderBy('createdAt', 'desc')
          );
        }
      } else {
        // No tournamentId specified, get all entries
        if (filter === 'all') {
          entriesQuery = query(collection(db, 'entries'), orderBy('createdAt', 'desc'));
        } else {
          entriesQuery = query(
            collection(db, 'entries'),
            where('status', '==', filter),
            orderBy('createdAt', 'desc')
          );
        }
      }

      const querySnapshot = await getDocs(entriesQuery);
      const entriesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        status: doc.data().status || 'pending', // Default to pending if status is not set
      })) as Entry[];

      console.log(`Found ${entriesData.length} entries`);
      setEntries(entriesData);
    } catch (err: any) {
      console.error('Error fetching entries:', err);
      setError(err.message || 'Failed to load entries');
    } finally {
      setLoading(false);
    }
  };

  const updateEntryStatus = async (entryId: string, status: 'pending' | 'approved' | 'rejected') => {
    try {
      setSuccess(null);
      setError(null);
      
      const entryRef = doc(db, 'entries', entryId);
      await updateDoc(entryRef, { status });
      
      // Update local state
      setEntries(entries.map(entry => 
        entry.id === entryId ? { ...entry, status } : entry
      ));
      
      setSuccess(`Entry status updated to ${status}`);
    } catch (err: any) {
      console.error('Error updating entry status:', err);
      setError(err.message || 'Failed to update entry status');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Manage Entries</h1>
          
          <div className="mt-3 sm:mt-0">
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('pending')}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'pending'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilter('approved')}
                className={`px-4 py-2 text-sm font-medium ${
                  filter === 'approved'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border-t border-b border-gray-300'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setFilter('rejected')}
                className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                  filter === 'rejected'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
                }`}
              >
                Rejected
              </button>
            </div>
          </div>
        </div>

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

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No entries found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Submitted By
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {entries.map((entry) => (
                  <tr key={entry.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="h-20 w-20 bg-gray-100 rounded overflow-hidden">
                        <img
                          src={entry.imageUrl}
                          alt={entry.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{entry.title}</div>
                      <div className="text-sm text-gray-500 max-w-xs truncate">{entry.description}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{entry.userDisplayName || 'Unknown User'}</div>
                      <div className="text-sm text-gray-500">{entry.userId}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${entry.status === 'approved' 
                          ? 'bg-green-100 text-green-800' 
                          : entry.status === 'rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'}`}
                      >
                        {entry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => updateEntryStatus(entry.id, 'approved')}
                          disabled={entry.status === 'approved'}
                          className={`${
                            entry.status === 'approved'
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-green-50 text-green-700 hover:bg-green-100'
                          } px-3 py-1 rounded-md text-sm`}
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateEntryStatus(entry.id, 'rejected')}
                          disabled={entry.status === 'rejected'}
                          className={`${
                            entry.status === 'rejected'
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-red-50 text-red-700 hover:bg-red-100'
                          } px-3 py-1 rounded-md text-sm`}
                        >
                          Reject
                        </button>
                        <button
                          onClick={() => updateEntryStatus(entry.id, 'pending')}
                          disabled={entry.status === 'pending'}
                          className={`${
                            entry.status === 'pending'
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                          } px-3 py-1 rounded-md text-sm`}
                        >
                          Pending
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 