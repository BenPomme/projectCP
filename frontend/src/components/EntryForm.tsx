import React from 'react';
import { useAuthStore } from '../store/authStore';
import { getTournamentState, submitEntry, getEntries } from '../services/firebase';

export default function EntryForm() {
  const { user } = useAuthStore();
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [image, setImage] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);
  const [tournamentState, setTournamentState] = React.useState<any>(null);
  const [userEntries, setUserEntries] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [state, entries] = await Promise.all([
          getTournamentState(),
          getEntries()
        ]);

        setTournamentState(state);
        
        // Filter entries for current user
        const userEntries = entries.filter(entry => entry.userId === user?.id);
        setUserEntries(userEntries);

        // Check if user has reached entry limit
        if (state?.maxEntriesPerUser !== null && userEntries.length >= state.maxEntriesPerUser) {
          setError(`You have reached the maximum number of entries (${state.maxEntriesPerUser})`);
        }
      } catch (err) {
        setError('Failed to load tournament data');
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [user?.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !image) return;

    try {
      // Check if user has reached entry limit
      if (tournamentState?.maxEntriesPerUser !== null) {
        if (userEntries.length >= tournamentState.maxEntriesPerUser) {
          setError(`You have reached the maximum number of entries (${tournamentState.maxEntriesPerUser})`);
          return;
        }
      }

      setLoading(true);
      setError(null);
      
      await submitEntry({
        title,
        description,
        image,
        userId: user.id
      });

      setSuccess(true);
      setTitle('');
      setDescription('');
      setImage(null);

      // Refresh entries
      const entries = await getEntries();
      const userEntries = entries.filter(entry => entry.userId === user.id);
      setUserEntries(userEntries);
    } catch (err) {
      setError('Failed to submit entry');
      console.error('Error submitting entry:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 rounded-md p-4">
          <p className="text-green-700">Entry submitted successfully!</p>
        </div>
      )}

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          required
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          {tournamentState?.maxEntriesPerUser !== null && (
            <p>
              Entries submitted: {userEntries.length} / {tournamentState.maxEntriesPerUser}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={loading || (tournamentState?.maxEntriesPerUser !== null && userEntries.length >= tournamentState.maxEntriesPerUser)}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Submitting...' : 'Submit Entry'}
        </button>
      </div>
    </form>
  );
} 