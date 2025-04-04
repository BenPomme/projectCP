import React, { useState } from 'react';
import { checkTournamentPassword } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

interface TournamentPasswordPromptProps {
  tournamentId: string;
  tournamentName: string;
  onPasswordSuccess: () => void;
}

export default function TournamentPasswordPrompt({
  tournamentId,
  tournamentName,
  onPasswordSuccess
}: TournamentPasswordPromptProps) {
  const { user } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const verifyTournamentPassword = async (
    tournamentId: string,
    password: string
  ): Promise<boolean> => {
    try {
      const success = await checkTournamentPassword(tournamentId, password);
      return success;
    } catch (error) {
      console.error('Error verifying password:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to access this tournament');
      return;
    }
    
    if (!password.trim()) {
      setError('Please enter a password');
      return;
    }
    
    setLoading(true);
    
    try {
      console.log(`Verifying password for tournament ${tournamentId}`);
      const isCorrect = await verifyTournamentPassword(tournamentId, password);
      
      console.log('Password verification result:', isCorrect);
      
      if (isCorrect) {
        // Store access permission in localStorage with user-specific key
        const storageKey = `tournament_access_${tournamentId}_${user.id}`;
        console.log('Setting localStorage key:', storageKey);
        localStorage.setItem(storageKey, 'true');
        
        // Call success callback if provided
        if (onPasswordSuccess) {
          onPasswordSuccess();
        }
      } else {
        setError('Incorrect password. Please try again.');
      }
    } catch (err: any) {
      console.error('Error during password verification:', err);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <p className="text-red-600 mb-4">You must be logged in to access this tournament.</p>
        <Link to="/login" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700">
          Log In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Password Required</h2>
      <p className="text-gray-600 mb-4">
        This tournament is password protected. Please enter the password to access {tournamentName}.
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Tournament Password
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md pr-10"
              placeholder="Enter password"
              autoComplete="off"
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
        
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Checking...
              </>
            ) : (
              'Submit Password'
            )}
          </button>
        </div>
      </form>
      
      <div className="mt-4 text-center">
        <a href="/" className="text-sm text-primary-600 hover:text-primary-500">
          Back to Home
        </a>
      </div>
    </div>
  );
} 