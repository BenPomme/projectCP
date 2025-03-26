import React, { useState } from 'react';
import { createTournament } from '../services/firebase';
import { useAuthStore } from '../store/authStore';
import { useNavigate } from 'react-router-dom';

export default function CreateTournamentForm() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [submissionDays, setSubmissionDays] = useState(7);
  const [votingDays, setVotingDays] = useState(7);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to create a tournament');
      return;
    }
    
    if (!name.trim()) {
      setError('Tournament name is required');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Create the tournament
      const tournament = await createTournament(
        name,
        user.id,
        submissionDays,
        votingDays
      );
      
      console.log('Tournament created:', tournament);
      setSuccess(true);
      
      // Redirect to tournament admin page after a short delay
      setTimeout(() => {
        navigate(`/admin/tournament/${tournament.id}/settings`);
      }, 1500);
      
    } catch (err: any) {
      console.error('Error creating tournament:', err);
      setError(err.message || 'Failed to create tournament');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Tournament</h2>
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4">
            Tournament created successfully! Redirecting to settings...
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Tournament Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter tournament name"
              disabled={loading || success}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="submissionDays" className="block text-gray-700 font-medium mb-2">
              Submission Phase Duration (days)
            </label>
            <input
              type="number"
              id="submissionDays"
              value={submissionDays}
              onChange={(e) => setSubmissionDays(parseInt(e.target.value, 10))}
              min={1}
              max={30}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled={loading || success}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="votingDays" className="block text-gray-700 font-medium mb-2">
              Voting Phase Duration (days)
            </label>
            <input
              type="number"
              id="votingDays"
              value={votingDays}
              onChange={(e) => setVotingDays(parseInt(e.target.value, 10))}
              min={1}
              max={30}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled={loading || success}
            />
          </div>
          
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || success}
            >
              {loading ? 'Creating...' : 'Create Tournament'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 