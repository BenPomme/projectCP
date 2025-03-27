import { useState, useRef, FormEvent, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useParams, useNavigate } from 'react-router-dom';
import { submitEntry, getTournamentById, getUserEntriesForTournament, getTournamentState } from '../services/firebase';
import { trackEvent } from '../utils/analytics';
import TournamentPasswordPrompt from '../components/TournamentPasswordPrompt';

export default function SubmitDesignPage() {
  const { user, loading: authLoading } = useAuth();
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [tournament, setTournament] = useState<any>(null);
  const [userEntries, setUserEntries] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [passwordRequired, setPasswordRequired] = useState(false);
  const [hasAccessPermission, setHasAccessPermission] = useState(false);
  const [maxEntriesReached, setMaxEntriesReached] = useState(false);

  // Get the actual tournament ID or handle 'current' specially
  const effectiveTournamentId = tournamentId || 'current';

  useEffect(() => {
    if (!authLoading && !user) {
      console.log('User not authenticated, redirecting to login');
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      setLoadingData(true);
      try {
        if (!effectiveTournamentId) {
          setError('Tournament ID is required');
          return;
        }

        // Handle 'current' by fetching the active tournament
        let actualTournamentId = effectiveTournamentId;
        let tournamentData;
        
        if (effectiveTournamentId === 'current') {
          console.log('Fetching active tournament...');
          tournamentData = await getTournamentState();
          
          if (!tournamentData) {
            setError('No active tournament found. Please select a specific tournament.');
            setLoadingData(false);
            return;
          }
          
          actualTournamentId = tournamentData.id;
          console.log(`Found active tournament: ${tournamentData.name} (ID: ${actualTournamentId})`);
        } else {
          // Fetch specific tournament data
          tournamentData = await getTournamentById(effectiveTournamentId);
        }
        
        if (!tournamentData) {
          setError(`Tournament not found. Please go back to the home page and select an active tournament.`);
          setLoadingData(false);
          return;
        }
        
        // Check if submissions are allowed in this tournament's current phase
        if (tournamentData.currentPhase !== 'submission') {
          setError('This tournament is not currently accepting submissions');
          setLoadingData(false);
          return;
        }
        
        setTournament(tournamentData);
        
        // Check if tournament is password protected
        if (tournamentData.isPasswordProtected) {
          // Check if user is the owner or an admin (they bypass password protection)
          const isOwnerOrAdmin = user?.id === tournamentData.ownerId || user?.isAdmin === true;
          
          if (!isOwnerOrAdmin) {
            // Check if user has already provided the password for this tournament
            const hasAccess = localStorage.getItem(`tournament_access_${actualTournamentId}_${user?.id}`);
            
            if (!hasAccess) {
              setPasswordRequired(true);
              return;
            }
          }
        }
        
        setHasAccessPermission(true);
        
        // Get user entries for this tournament
        const userEntries = await getUserEntriesForTournament(actualTournamentId, user?.id || '');
        setUserEntries(userEntries);
        
        // Check if user has reached the maximum number of entries
        if (tournamentData.maxEntriesPerUser !== null && userEntries.length >= tournamentData.maxEntriesPerUser) {
          setMaxEntriesReached(true);
        }
      } catch (err: any) {
        console.error('Error fetching tournament data:', err);
        setError(err.message || 'Failed to load tournament data');
      } finally {
        setLoadingData(false);
      }
    };

    if (user) {
      fetchData();
    }
  }, [user, authLoading, navigate, effectiveTournamentId]);

  // Handle successful password entry
  const handlePasswordSuccess = () => {
    setPasswordRequired(false);
    setHasAccessPermission(true);
    
    // Check if user has reached the maximum number of entries
    if (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament.maxEntriesPerUser) {
      setMaxEntriesReached(true);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setError('You must be logged in to submit a design');
      navigate('/login');
      return;
    }
    
    if (!title.trim()) {
      setError('Please enter a title for your design');
      return;
    }
    
    if (!imageFile) {
      setError('Please upload an image of your design');
      return;
    }
    
    // Check if user has reached entry limit
    if (tournament?.maxEntriesPerUser !== null && 
        userEntries.length >= tournament.maxEntriesPerUser) {
      setError(`You have reached the maximum number of entries (${tournament.maxEntriesPerUser}) for this tournament`);
      return;
    }
    
    try {
      setError(null);
      setLoading(true);
      
      // Submit the entry to the actual tournament ID
      await submitEntry({
        title,
        description: description.trim(),
        image: imageFile,
        userId: user.id,
        tournamentId: tournament.id
      });
      
      console.log('Design submitted successfully');
      trackEvent('design_submitted', { title, tournamentId: tournament.id });
      
      // Redirect to tournament page
      navigate(`/tournament/${tournament.id}`);
      
    } catch (err: any) {
      console.error('Submit error:', err);
      setError(err.message || 'Failed to submit design. Please try again.');
      setLoading(false);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please upload an image file (JPEG, PNG, etc.)');
        return;
      }
      
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size must be less than 5MB');
        return;
      }
      
      setImageFile(file);
      setError(null);
    }
  };
  
  if (loadingData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  // Display password prompt if tournament requires a password
  if (passwordRequired && !hasAccessPermission && tournament) {
    return (
      <TournamentPasswordPrompt
        tournamentId={tournament.id}
        tournamentName={tournament.name}
        onPasswordSuccess={handlePasswordSuccess}
      />
    );
  }

  // If no tournament is found or there's an error, display error message with a back button
  if (!tournament) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-xl font-bold text-red-600">Tournament Not Available</h1>
          <p className="text-gray-700 mt-2">{error || "No tournament is available for submissions."}</p>
          <button 
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  // Calculate remaining entries
  const remainingEntries = tournament?.maxEntriesPerUser === null 
    ? 'Unlimited' 
    : tournament?.maxEntriesPerUser - userEntries.length;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Submit Your Design</h3>
            <p className="mt-1 text-sm text-gray-600">
              Submit your design for {tournament?.name || 'the current competition'}. Please make sure your image clearly 
              shows your concept.
            </p>
            
            {tournament && (
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700">Tournament Details</h4>
                <p className="text-sm text-gray-600">
                  Submission Phase Ends: {tournament.submissionPhaseEnd.toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-600">
                  Your Entries: {userEntries.length} / {tournament.maxEntriesPerUser === null ? '∞' : tournament.maxEntriesPerUser}
                </p>
                <p className="text-sm text-gray-600">
                  Remaining Entries: {remainingEntries}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                {error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="text-sm text-red-700">{error}</div>
                  </div>
                )}
                
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="title"
                      className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      disabled={loading || (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament?.maxEntriesPerUser)}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description (optional)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      rows={3}
                      className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      disabled={loading || (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament?.maxEntriesPerUser)}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Design Image
                  </label>
                  <div className="mt-1 flex items-center">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={loading || (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament?.maxEntriesPerUser)}
                    >
                      Choose file
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleFileChange}
                      disabled={loading || (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament?.maxEntriesPerUser)}
                    />
                    <span className="ml-2 text-sm text-gray-500">
                      {imageFile ? imageFile.name : 'No file chosen'}
                    </span>
                  </div>
                  
                  {imageFile && (
                    <div className="mt-2">
                      <img
                        src={URL.createObjectURL(imageFile)}
                        alt="Preview"
                        className="h-40 object-contain"
                      />
                    </div>
                  )}
                </div>
                
                {loading && (
                  <div>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200">
                            {uploadProgress < 100 ? 'Uploading' : 'Processing'}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-primary-600">
                            {Math.round(uploadProgress)}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary-200">
                        <div
                          style={{ width: `${uploadProgress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary-500 transition-all duration-300"
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading || !imageFile || !title.trim() || (tournament?.maxEntriesPerUser !== null && userEntries.length >= tournament?.maxEntriesPerUser)}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 