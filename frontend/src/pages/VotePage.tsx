import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../config/firebase';
import { collection, query, where, getDocs, addDoc, Timestamp, limit, orderBy } from 'firebase/firestore';
import { trackEvent } from '../utils/analytics';

interface Entry {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  userId: string;
  userDisplayName: string;
  userPhotoURL: string | null;
  createdAt: any;
  voteCount: number;
}

export default function VotePage() {
  const { user } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);
  const [loading, setLoading] = useState(true);
  const [voting, setVoting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remainingVotes, setRemainingVotes] = useState(10);
  const [votedEntries, setVotedEntries] = useState<string[]>([]);

  useEffect(() => {
    if (user) {
      fetchRandomEntry();
      fetchVotedEntries();
    } else {
      setLoading(false);
      setError('Please log in to vote on designs.');
    }
  }, [user]);

  const fetchVotedEntries = async () => {
    if (!user) return;
    
    try {
      const votesQuery = query(
        collection(db, 'votes'),
        where('userId', '==', user.id)
      );
      const votesSnapshot = await getDocs(votesQuery);
      const votedEntryIds = votesSnapshot.docs.map(doc => doc.data().entryId);
      setVotedEntries(votedEntryIds);
      setRemainingVotes(Math.max(0, 10 - votedEntryIds.length));
    } catch (err) {
      console.error('Error fetching voted entries:', err);
    }
  };

  const fetchRandomEntry = async () => {
    if (!user) return;
    
    try {
      setLoading(true);
      setError(null);

      // Get all entries except user's own and already voted ones
      const entriesQuery = query(
        collection(db, 'entries'),
        where('userId', '!=', user.id),
        where('status', '==', 'approved'),
        orderBy('userId'), // Required for compound query
        limit(20)
      );
      
      const entriesSnapshot = await getDocs(entriesQuery);
      let availableEntries = entriesSnapshot.docs
        .map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Entry[];
      
      // Filter out entries the user has already voted on
      availableEntries = availableEntries.filter(entry => !votedEntries.includes(entry.id));
      
      if (availableEntries.length === 0) {
        setCurrentEntry(null);
        setError('No more entries to vote on. Check back later for new submissions.');
        setLoading(false);
        return;
      }
      
      // Select a random entry
      const randomIndex = Math.floor(Math.random() * availableEntries.length);
      setCurrentEntry(availableEntries[randomIndex]);
    } catch (err: any) {
      console.error('Error fetching random entry:', err);
      setError(err.message || 'Failed to load an entry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (rating: number) => {
    if (!currentEntry || voting || remainingVotes <= 0 || !user) return;
    
    try {
      setVoting(true);
      setError(null);
      
      // Add vote to Firestore
      await addDoc(collection(db, 'votes'), {
        entryId: currentEntry.id,
        userId: user.id,
        rating,
        createdAt: Timestamp.now()
      });
      
      // Track the vote
      trackEvent('vote_submitted', { rating });
      
      // Update local state
      setVotedEntries([...votedEntries, currentEntry.id]);
      setRemainingVotes(remainingVotes - 1);
      
      // Fetch next entry
      fetchRandomEntry();
    } catch (err: any) {
      console.error('Error submitting vote:', err);
      setError(err.message || 'Failed to submit your vote. Please try again.');
    } finally {
      setVoting(false);
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
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Vote on Designs</h1>
        <p className="mt-2 text-lg text-gray-600">
          Rate submissions to help determine the winners.
        </p>
        <div className="mt-2 inline-block bg-primary-100 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-primary-800">
            {remainingVotes} votes remaining
          </span>
        </div>
      </div>
      
      {error && (
        <div className="rounded-md bg-red-50 p-4 max-w-3xl mx-auto mb-8">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
      
      {!error && currentEntry && (
        <div className="bg-white shadow rounded-lg overflow-hidden max-w-3xl mx-auto">
          <div className="relative">
            <img
              src={currentEntry.imageUrl}
              alt={currentEntry.title}
              className="w-full h-[400px] object-contain bg-gray-100"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900">{currentEntry.title}</h2>
            {currentEntry.description && (
              <p className="mt-2 text-gray-600">{currentEntry.description}</p>
            )}
            
            <div className="mt-6">
              <div className="text-center">
                <h3 className="text-sm font-medium text-gray-700 mb-4">Rate this design:</h3>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleVote(rating)}
                      disabled={voting || remainingVotes <= 0}
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
                        ${voting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-100'}
                        ${rating === 1 ? 'bg-red-100 text-red-600' : ''}
                        ${rating === 2 ? 'bg-orange-100 text-orange-600' : ''}
                        ${rating === 3 ? 'bg-yellow-100 text-yellow-600' : ''}
                        ${rating === 4 ? 'bg-lime-100 text-lime-600' : ''}
                        ${rating === 5 ? 'bg-green-100 text-green-600' : ''}
                      `}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  1 = Poor, 5 = Excellent
                </p>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button
                  onClick={() => fetchRandomEntry()}
                  disabled={voting}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Skip this design
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {remainingVotes <= 0 && (
        <div className="mt-8 text-center">
          <div className="rounded-md bg-green-50 p-4 max-w-3xl mx-auto">
            <div className="text-sm text-green-700">
              Thank you for voting! You've used all your votes for now.
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 