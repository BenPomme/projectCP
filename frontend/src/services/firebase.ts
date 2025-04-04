import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  increment,
  addDoc,
  Timestamp,
  writeBatch
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from 'firebase/storage';
import { auth, db, storage } from '../config/firebase';

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Entry {
  id: string;
  userId: string;
  tournamentId: string;
  title: string;
  description?: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  voteCount: number;
  averageRating: number;
  status?: 'pending' | 'approved' | 'rejected';
  userDisplayName?: string;
  userPhotoURL?: string | null;
}

export interface Vote {
  id: string;
  userId: string;
  entryId: string;
  tournamentId: string;
  rating: number;
  createdAt: Date;
}

export interface TournamentState {
  id: string;
  currentPhase: 'submission' | 'voting' | 'completed';
  submissionPhaseStart: Date;
  submissionPhaseEnd: Date;
  votingPhaseStart: Date;
  votingPhaseEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  maxEntriesPerUser: number | null; // null means unlimited
  maxVotesPerUser: number | null; // null means unlimited
  votingQuestion: string; // Question to display above the voting scale
  isPasswordProtected: boolean;
  password: string | null;
}

export interface TournamentEntry {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  userId: string;
  authorName?: string;
  tournamentId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  updatedAt: Date;
  voteCount?: number;
  averageRating?: number;
}

export interface TournamentVote {
  id: string;
  userId: string;
  entryId: string;
  tournamentId: string;
  rating: number;
  createdAt: Date;
}

// Auth functions
export const register = async (email: string, password: string): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user: User = {
    id: userCredential.user.uid,
    email: userCredential.user.email!,
    isAdmin: false,
    createdAt: new Date(),
    updatedAt: new Date()
  };
  
  await setDoc(doc(db, 'users', user.id), user);
  return user;
};

export const login = async (email: string, password: string): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
  return userDoc.data() as User;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};

export const getCurrentUser = (): Promise<FirebaseUser | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

// Entry functions
export const createEntry = async (entry: Omit<Entry, 'id' | 'createdAt' | 'updatedAt' | 'voteCount' | 'averageRating'>) => {
  const now = Timestamp.now();
  const newEntry = {
    ...entry,
    createdAt: now.toDate(),
    updatedAt: now.toDate(),
    voteCount: 0,
    averageRating: 0
  };
  
  const docRef = await addDoc(collection(db, 'entries'), {
    ...newEntry,
    // Convert back to Timestamp for Firestore storage
    createdAt: now,
    updatedAt: now
  });
  return { id: docRef.id, ...newEntry };
};

export const getEntry = async (id: string): Promise<Entry | null> => {
  const docRef = doc(db, 'entries', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as Entry : null;
};

// Get all entries for a specific tournament
export const getEntriesForTournament = async (tournamentId: string): Promise<Entry[]> => {
  try {
    console.log(`Fetching entries for tournament ${tournamentId}...`);
    
    // Simple query with only a single filter - doesn't require a composite index
    const entriesQuery = query(
      collection(db, 'entries'),
      where('tournamentId', '==', tournamentId)
    );
    
    const querySnapshot = await getDocs(entriesQuery);
    const entries = querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: safelyConvertToDate(data.createdAt),
        updatedAt: safelyConvertToDate(data.updatedAt)
      } as Entry;
    });
    
    // Sort by createdAt descending on the client side
    entries.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    console.log(`Found ${entries.length} entries for tournament ${tournamentId}`);
    return entries;
  } catch (error) {
    console.error(`Error getting entries for tournament ${tournamentId}:`, error);
    return [];
  }
};

// Get all entries (for backward compatibility)
export const getEntries = async (tournamentId?: string): Promise<Entry[]> => {
  try {
    if (tournamentId) {
      return getEntriesForTournament(tournamentId);
    }
    
    // Try to get the active tournament
    const activeTournament = await getTournamentState();
    if (activeTournament) {
      return getEntriesForTournament(activeTournament.id);
    }
    
    console.warn('No tournamentId provided and no active tournament found - returning all entries. This is deprecated behavior.');
    // Fallback to all entries - this should be avoided
    const entriesQuery = query(collection(db, 'entries'), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(entriesQuery);
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: safelyConvertToDate(data.createdAt),
        updatedAt: safelyConvertToDate(data.updatedAt)
      } as Entry;
    });
  } catch (error) {
    console.error('Error getting entries:', error);
    return [];
  }
};

// Get entries submitted by a specific user for a specific tournament
export const getUserEntriesForTournament = async (tournamentId: string, userId: string): Promise<Entry[]> => {
  try {
    console.log(`Fetching entries for user ${userId} in tournament ${tournamentId}...`);
    const entriesRef = collection(db, 'entries');
    const q = query(
      entriesRef, 
      where('tournamentId', '==', tournamentId),
      where('userId', '==', userId)
    );
    const entriesSnapshot = await getDocs(q);
    
    const entries = entriesSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: safelyConvertToDate(data.createdAt),
        updatedAt: safelyConvertToDate(data.updatedAt)
      } as Entry;
    });
    
    console.log(`Found ${entries.length} entries for user ${userId} in tournament ${tournamentId}`);
    return entries;
  } catch (error) {
    console.error('Error fetching user entries:', error);
    throw error;
  }
};

// Get all entries submitted by a specific user
export const getUserEntries = async (userId: string): Promise<Entry[]> => {
  const entriesQuery = query(
    collection(db, 'entries'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(entriesQuery);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }) as Entry);
};

export const updateEntry = async (id: string, data: Partial<Entry>) => {
  const docRef = doc(db, 'entries', id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now()
  });
  return getEntry(id);
};

export const deleteEntry = async (id: string) => {
  const docRef = doc(db, 'entries', id);
  await deleteDoc(docRef);
};

// Vote functions
export const createVote = async (vote: Omit<Vote, 'id' | 'createdAt'>) => {
  console.log('Creating vote with data:', vote);
  
  try {
    // First, check if a vote already exists
    const votesQuery = query(
      collection(db, 'votes'),
      where('userId', '==', vote.userId),
      where('entryId', '==', vote.entryId)
    );
    
    const existingVotes = await getDocs(votesQuery);
    if (!existingVotes.empty) {
      console.log('User already voted for this entry');
      throw new Error('You have already voted for this entry');
    }
    
    const newVote = {
      ...vote,
      createdAt: Timestamp.now()
    };
    
    // Get entry to update
    const entryRef = doc(db, 'entries', vote.entryId);
    const entrySnap = await getDoc(entryRef);
    
    if (!entrySnap.exists()) {
      console.error('Entry not found:', vote.entryId);
      throw new Error('Entry does not exist');
    }
    
    const entryData = entrySnap.data();
    console.log('Entry before update:', JSON.stringify(entryData, null, 2));
    
    // Calculate new rating
    const currentVoteCount = entryData.voteCount || 0;
    const currentTotalPoints = (entryData.averageRating || 0) * currentVoteCount;
    const newVoteCount = currentVoteCount + 1;
    const newTotalPoints = currentTotalPoints + vote.rating;
    const newAverageRating = newTotalPoints / newVoteCount;
    
    console.log('Vote calculation:', {
      currentVoteCount,
      currentTotalPoints,
      newVoteCount,
      newTotalPoints,
      newAverageRating,
      newRating: vote.rating
    });

    // First add the vote
    const docRef = await addDoc(collection(db, 'votes'), newVote);
    
    // Then update the entry with new vote count and average
    const updateData = {
      voteCount: newVoteCount,
      averageRating: newAverageRating,
      updatedAt: Timestamp.now()
    };
    
    await updateDoc(entryRef, updateData);
    
    console.log('Entry updated with new vote stats:', updateData);
    
    // Verify the update worked by getting the entry again
    const updatedEntrySnap = await getDoc(entryRef);
    if (updatedEntrySnap.exists()) {
      console.log('Updated entry data:', JSON.stringify(updatedEntrySnap.data(), null, 2));
    }
    
    return { id: docRef.id, ...newVote };
  } catch (error) {
    console.error('Error in createVote:', error);
    throw error;
  }
};

export const getVotesForEntry = async (entryId: string): Promise<Vote[]> => {
  const q = query(collection(db, 'votes'), where('entryId', '==', entryId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Vote[];
};

export const getUserVotes = async (userId: string): Promise<Vote[]> => {
  const q = query(collection(db, 'votes'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as Vote[];
};

export const getVotes = async (userId: string): Promise<Record<string, number>> => {
  try {
    const userVotes = await getUserVotes(userId);
    const votesMap: Record<string, number> = {};
    
    userVotes.forEach(vote => {
      votesMap[vote.entryId] = vote.rating;
    });
    
    return votesMap;
  } catch (error) {
    console.error('Error getting user votes:', error);
    return {};
  }
};

// Get votes for a specific tournament
export const getTournamentVotes = async (tournamentId: string): Promise<Vote[]> => {
  try {
    console.log(`Fetching votes for tournament ${tournamentId}...`);
    // Simple query with only a single filter - doesn't require a composite index
    const votesQuery = query(
      collection(db, 'votes'),
      where('tournamentId', '==', tournamentId)
    );
    const querySnapshot = await getDocs(votesQuery);
    const votes = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Vote[];
    console.log(`Found ${votes.length} votes for tournament ${tournamentId}`);
    return votes;
  } catch (error) {
    console.error(`Error getting votes for tournament ${tournamentId}:`, error);
    return [];
  }
};

// Get votes from a specific user for a specific tournament
export async function getUserVotesForTournament(tournamentId: string, userId: string): Promise<TournamentVote[]> {
  try {
    console.log(`Fetching votes for user ${userId} in tournament ${tournamentId}...`);
    const votesRef = collection(db, 'votes');
    const q = query(
      votesRef, 
      where('tournamentId', '==', tournamentId),
      where('userId', '==', userId)
    );
    const votesSnapshot = await getDocs(q);
    
    const votes = votesSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : data.createdAt,
      } as TournamentVote;
    });
    
    console.log(`Found ${votes.length} votes by user for tournament ${tournamentId}`);
    return votes;
  } catch (error) {
    console.error('Error fetching user votes:', error);
    throw error;
  }
}

export const submitVote = async (entryId: string, rating: number, tournamentId: string): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('You must be logged in to vote');
    }

    console.log(`Submitting vote for entry ${entryId} with rating ${rating} in tournament ${tournamentId}`);
    
    // Create the vote
    const voteResult = await createVote({
      userId: user.uid,
      entryId,
      tournamentId,
      rating
    });
    
    console.log(`Vote created successfully for entry ${entryId}:`, voteResult);
    
  } catch (error) {
    console.error('Error submitting vote:', error);
    throw error;
  }
};

// Storage functions
export const uploadImage = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
};

export const deleteImage = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

// Entry submission helper with tournament ID
export const submitEntry = async ({ 
  title, 
  description, 
  image, 
  userId, 
  tournamentId 
}: { 
  title: string; 
  description: string; 
  image: File;
  userId: string;
  tournamentId: string;
}): Promise<Entry> => {
  try {
    // Get user
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.data();
    
    // Upload image
    const imagePath = `entries/${tournamentId}/${userId}/${Date.now()}_${image.name}`;
    const imageUrl = await uploadImage(image, imagePath);
    
    // Create entry with user display name
    const entry = await createEntry({
      userId,
      tournamentId,
      title,
      description,
      imageUrl,
      userDisplayName: userData?.displayName || 'Anonymous',
      userPhotoURL: userData?.photoURL || null,
      status: 'approved'  // Auto-approve for now
    });
    
    return entry;
  } catch (error) {
    console.error('Error submitting entry:', error);
    throw error;
  }
};

// Helper function to convert Firestore timestamp to Date
const convertTimestampToDate = (timestamp: any): Date => {
  if (!timestamp) return new Date();
  if (timestamp instanceof Date) return timestamp;
  if (timestamp?.toDate) return timestamp.toDate();
  return new Date(timestamp);
};

// Get all tournaments
export const getTournaments = async (): Promise<TournamentState[]> => {
  try {
    console.log("Fetching all tournaments...");
    // Simple query without ordering or filtering that doesn't require a composite index
    const tournamentsSnapshot = await getDocs(collection(db, 'tournaments'));
    
    const tournaments = tournamentsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        submissionPhaseStart: convertTimestampToDate(data.submissionPhaseStart),
        submissionPhaseEnd: convertTimestampToDate(data.submissionPhaseEnd),
        votingPhaseStart: convertTimestampToDate(data.votingPhaseStart),
        votingPhaseEnd: convertTimestampToDate(data.votingPhaseEnd),
        createdAt: convertTimestampToDate(data.createdAt),
        updatedAt: convertTimestampToDate(data.updatedAt),
      } as TournamentState;
    });
    
    // Sort on client side instead of using orderBy in the query
    tournaments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    console.log(`Found ${tournaments.length} tournaments`);
    return tournaments;
  } catch (error) {
    console.error('Error getting tournaments:', error);
    return []; // Return empty array instead of throwing error for a more graceful failure
  }
};

// Get tournaments owned by a specific user
export const getUserTournaments = async (userId: string): Promise<TournamentState[]> => {
  try {
    console.log(`Fetching tournaments for user ${userId}...`);
    const tournamentsQuery = query(
      collection(db, 'tournaments'),
      where('ownerId', '==', userId)
    );
    
    const tournamentsSnapshot = await getDocs(tournamentsQuery);
    
    const tournaments = tournamentsSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        ...data,
        id: doc.id,
        submissionPhaseStart: convertTimestampToDate(data.submissionPhaseStart),
        submissionPhaseEnd: convertTimestampToDate(data.submissionPhaseEnd),
        votingPhaseStart: convertTimestampToDate(data.votingPhaseStart),
        votingPhaseEnd: convertTimestampToDate(data.votingPhaseEnd),
        createdAt: convertTimestampToDate(data.createdAt),
        updatedAt: convertTimestampToDate(data.updatedAt),
      } as TournamentState;
    });
    
    // Sort on client side
    tournaments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    
    console.log(`Found ${tournaments.length} tournaments for user ${userId}`);
    return tournaments;
  } catch (error) {
    console.error(`Error getting tournaments for user ${userId}:`, error);
    return []; // Return empty array instead of throwing
  }
};

// Get a specific tournament by ID
export const getTournamentById = async (tournamentId: string): Promise<TournamentState | null> => {
  try {
    console.log(`Fetching tournament with ID ${tournamentId}...`);
    const tournamentDoc = await getDoc(doc(db, 'tournaments', tournamentId));
    
    if (!tournamentDoc.exists()) {
      console.log(`Tournament with ID ${tournamentId} not found`);
      return null;
    }
    
    const data = tournamentDoc.data();
    const tournament = {
      ...data,
      id: tournamentDoc.id,
      submissionPhaseStart: convertTimestampToDate(data.submissionPhaseStart),
      submissionPhaseEnd: convertTimestampToDate(data.submissionPhaseEnd),
      votingPhaseStart: convertTimestampToDate(data.votingPhaseStart),
      votingPhaseEnd: convertTimestampToDate(data.votingPhaseEnd),
      createdAt: convertTimestampToDate(data.createdAt),
      updatedAt: convertTimestampToDate(data.updatedAt),
    } as TournamentState;
    
    console.log(`Tournament found:`, tournament);
    return tournament;
  } catch (error) {
    console.error(`Error getting tournament with ID ${tournamentId}:`, error);
    throw error;
  }
};

// Get the current active tournament (for backward compatibility)
export const getTournamentState = async (): Promise<TournamentState | null> => {
  try {
    // First get all tournaments
    const tournaments = await getTournaments();
    
    // Filter and find active tournaments client-side instead of using complex queries
    const activeTournaments = tournaments.filter(
      t => t.currentPhase === 'submission' || t.currentPhase === 'voting'
    );
    
    if (activeTournaments.length > 0) {
      // Sort by most recently created first
      activeTournaments.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
      return activeTournaments[0];
    }
    
    // For backward compatibility, check the old location
    console.log("No active tournaments found in 'tournaments' collection, checking legacy location");
    const stateDoc = await getDoc(doc(db, 'tournament', 'state'));
    
    if (stateDoc.exists()) {
      console.log("Found tournament state in legacy location");
      const data = stateDoc.data();
      const legacyTournament = {
        ...data,
        id: 'state',
        tournamentId: 'legacy',
        name: 'Legacy Tournament',
        ownerId: 'admin',
        submissionPhaseStart: convertTimestampToDate(data.submissionPhaseStart),
        submissionPhaseEnd: convertTimestampToDate(data.submissionPhaseEnd),
        votingPhaseStart: convertTimestampToDate(data.votingPhaseStart),
        votingPhaseEnd: convertTimestampToDate(data.votingPhaseEnd),
        createdAt: convertTimestampToDate(data.createdAt || new Date()),
        updatedAt: convertTimestampToDate(data.updatedAt || new Date()),
      };
      
      // Migrate the legacy tournament to the new collection
      console.log("Migrating legacy tournament to new collection...");
      const newTournamentRef = await addDoc(collection(db, 'tournaments'), legacyTournament);
      
      return {
        ...legacyTournament,
        id: newTournamentRef.id
      } as TournamentState;
    }
    
    console.log("No tournament state found");
    return null;
  } catch (error) {
    console.error('Error getting tournament state:', error);
    throw error;
  }
};

export const updateTournamentState = async (updates: Partial<TournamentState>): Promise<void> => {
  try {
    if (!updates.id) {
      throw new Error('Tournament ID is required for updates');
    }
    
    const tournamentId = updates.id;
    console.log(`Updating tournament ${tournamentId} with:`, updates);
    
    // Remove the id from updates since it's not a field in the document
    const { id, ...docUpdates } = updates;
    
    await updateDoc(doc(db, 'tournaments', tournamentId), {
      ...docUpdates,
      updatedAt: new Date()
    });
    
    console.log(`Tournament ${tournamentId} updated successfully`);
  } catch (error) {
    console.error('Error updating tournament:', error);
    throw error;
  }
};

export const createTournament = async (
  name: string, 
  ownerId: string,
  submissionDays: number = 7,
  votingDays: number = 7
): Promise<TournamentState> => {
  try {
    console.log(`Creating new tournament "${name}" for user ${ownerId}`);
    
    const now = new Date();
    const submissionEnd = new Date(now.getTime() + submissionDays * 24 * 60 * 60 * 1000);
    const votingEnd = new Date(submissionEnd.getTime() + votingDays * 24 * 60 * 60 * 1000);
    
    const tournamentData = {
      name,
      ownerId,
      tournamentId: `tournament_${Date.now()}`,
      currentPhase: 'submission',
      submissionPhaseStart: now,
      submissionPhaseEnd: submissionEnd,
      votingPhaseStart: submissionEnd,
      votingPhaseEnd: votingEnd,
      maxEntriesPerUser: null,
      maxVotesPerUser: null,
      votingQuestion: "How would you rate this entry?",
      createdAt: now,
      updatedAt: now,
      isPasswordProtected: false,
      password: null
    };
    
    console.log("Tournament data:", tournamentData);
    
    const docRef = await addDoc(collection(db, 'tournaments'), tournamentData);
    
    // Make the user an admin by updating their document
    await updateDoc(doc(db, 'users', ownerId), {
      isAdmin: true,
      updatedAt: now
    });
    
    console.log(`User ${ownerId} has been granted admin rights as tournament creator`);
    
    return {
      ...tournamentData,
      id: docRef.id
    } as TournamentState;
  } catch (error) {
    console.error('Error creating tournament:', error);
    throw error;
  }
};

export const initializeTournamentState = async (): Promise<TournamentState> => {
  try {
    console.log("Initializing tournament state...");
    
    // Check if we have a default tournament already
    const tournamentState = await getTournamentState();
    if (tournamentState) {
      console.log("Existing tournament found, returning it");
      return tournamentState;
    }
    
    // Create a new default tournament
    return await createTournament('Default Tournament', 'admin');
  } catch (error) {
    console.error('Error initializing tournament state:', error);
    throw error;
  }
};

// Delete a tournament and all associated entries and votes
export const deleteTournament = async (tournamentId: string): Promise<void> => {
  try {
    console.log(`Deleting tournament with ID: ${tournamentId}`);
    
    // First, check if the current user has permission to delete this tournament
    const user = auth.currentUser;
    if (!user) {
      throw new Error('You must be logged in to delete a tournament');
    }
    
    // Get the tournament to check ownership
    const tournamentRef = doc(db, 'tournaments', tournamentId);
    const tournamentSnap = await getDoc(tournamentRef);
    
    if (!tournamentSnap.exists()) {
      throw new Error('Tournament not found');
    }
    
    const tournament = tournamentSnap.data();
    const userData = (await getDoc(doc(db, 'users', user.uid))).data();
    
    // Only the tournament owner or an admin can delete it
    if (tournament.ownerId !== user.uid && !(userData?.isAdmin)) {
      throw new Error('You do not have permission to delete this tournament');
    }
    
    // 1. Get all entries for this tournament
    const entries = await getEntriesForTournament(tournamentId);
    
    // 2. Get all votes for this tournament
    const votes = await getTournamentVotes(tournamentId);
    
    // Start a batch to delete everything
    const batch = writeBatch(db);
    
    // 3. Delete all votes for the tournament
    for (const vote of votes) {
      batch.delete(doc(db, 'votes', vote.id));
    }
    
    // 4. Delete all entries for the tournament
    for (const entry of entries) {
      batch.delete(doc(db, 'entries', entry.id));
      
      // Delete the image file from storage if it exists
      if (entry.imageUrl) {
        try {
          // Parse the storage path from the URL
          const urlPath = entry.imageUrl.split('/').slice(3).join('/').split('?')[0];
          const decodedPath = decodeURIComponent(urlPath);
          await deleteImage(`entries/${tournamentId}/${entry.userId}/${decodedPath.split('/').pop()}`);
        } catch (error) {
          console.error(`Failed to delete image for entry ${entry.id}:`, error);
          // Continue with deletion even if image deletion fails
        }
      }
    }
    
    // 5. Delete the tournament document
    batch.delete(tournamentRef);
    
    // Commit the batch deletion
    await batch.commit();
    
    console.log(`Successfully deleted tournament ${tournamentId} with ${entries.length} entries and ${votes.length} votes`);
  } catch (error) {
    console.error('Error deleting tournament:', error);
    throw error;
  }
};

// Update tournament password protection
export const updateTournamentPassword = async (
  tournamentId: string, 
  isPasswordProtected: boolean, 
  password: string | null
): Promise<void> => {
  try {
    console.log(`Updating password for tournament ${tournamentId}`);
    
    // First, check if the current user has permission
    const user = auth.currentUser;
    if (!user) {
      throw new Error('You must be logged in to update tournament settings');
    }
    
    // Get the tournament to check ownership
    const tournamentRef = doc(db, 'tournaments', tournamentId);
    const tournamentSnap = await getDoc(tournamentRef);
    
    if (!tournamentSnap.exists()) {
      throw new Error('Tournament not found');
    }
    
    const tournament = tournamentSnap.data();
    const userData = (await getDoc(doc(db, 'users', user.uid))).data();
    
    // Only the tournament owner or an admin can update settings
    if (tournament.ownerId !== user.uid && !(userData?.isAdmin)) {
      throw new Error('You do not have permission to update this tournament');
    }
    
    // Update the tournament with password settings
    await updateDoc(tournamentRef, {
      isPasswordProtected,
      password: isPasswordProtected ? password : null,
      updatedAt: Timestamp.now()
    });
    
    console.log(`Successfully updated password protection for tournament ${tournamentId}`);
  } catch (error) {
    console.error('Error updating tournament password:', error);
    throw error;
  }
};

// Check if a password is correct for a tournament
export const checkTournamentPassword = async (
  tournamentId: string,
  password: string
): Promise<boolean> => {
  try {
    console.log(`Checking password for tournament ${tournamentId}...`);
    
    // Get the tournament
    const tournament = await getTournamentById(tournamentId);
    
    if (!tournament) {
      console.error('Tournament not found');
      return false;
    }
    
    console.log(`Tournament found: ${tournament.name}, isPasswordProtected: ${tournament.isPasswordProtected}`);
    
    if (!tournament.isPasswordProtected) {
      console.log('Tournament is not password protected');
      return true;
    }
    
    // Compare passwords
    const isCorrect = tournament.password === password;
    console.log(`Password comparison result: ${isCorrect}`);
    return isCorrect;
  } catch (error) {
    console.error('Error checking tournament password:', error);
    return false;
  }
};

// Helper function to convert any timestamp format to Date safely
const safelyConvertToDate = (timestamp: any): Date => {
  try {
    if (!timestamp) return new Date();
    
    if (timestamp instanceof Date) return timestamp;
    
    if (typeof timestamp === 'object') {
      // Check for Firestore Timestamp methods
      if (typeof timestamp.toDate === 'function') {
        return timestamp.toDate();
      }
      
      // Some Firestore timestamps might have toMillis instead
      if (typeof timestamp.toMillis === 'function') {
        return new Date(timestamp.toMillis());
      }
      
      // Try to create a date from the object
      return new Date(timestamp);
    }
    
    if (typeof timestamp === 'number') {
      return new Date(timestamp);
    }
    
    if (typeof timestamp === 'string') {
      return new Date(timestamp);
    }
    
    return new Date();
  } catch (err) {
    console.error("Error converting timestamp to Date:", err);
    return new Date();
  }
};

// Get only approved entries for a specific tournament
export async function getApprovedEntriesForTournament(tournamentId: string): Promise<TournamentEntry[]> {
  try {
    console.log(`Fetching approved entries for tournament ${tournamentId}...`);
    const entriesRef = collection(db, 'entries');
    const q = query(
      entriesRef, 
      where('tournamentId', '==', tournamentId),
      where('status', '==', 'approved')
    );
    const entriesSnapshot = await getDocs(q);
    
    const entries = entriesSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ...data,
        // Use our safer conversion functions
        createdAt: safelyConvertToDate(data.createdAt),
        updatedAt: safelyConvertToDate(data.updatedAt),
      } as TournamentEntry;
    });
    
    console.log(`Found ${entries.length} approved entries for tournament ${tournamentId}`);
    return entries;
  } catch (error) {
    console.error('Error fetching approved entries:', error);
    throw error;
  }
}

// Get all tournaments
export async function getAllTournaments(): Promise<TournamentState[]> {
  try {
    console.log('Fetching all tournaments...');
    const tournamentsRef = collection(db, 'tournaments');
    const tournamentsSnapshot = await getDocs(tournamentsRef);
    
    const tournaments = tournamentsSnapshot.docs.map((doc) => {
      const data = doc.data();
      
      // Create safer date conversions
      return {
        id: doc.id,
        ...data,
        createdAt: safelyConvertToDate(data.createdAt),
        updatedAt: safelyConvertToDate(data.updatedAt),
        submissionPhaseStart: safelyConvertToDate(data.submissionPhaseStart),
        submissionPhaseEnd: safelyConvertToDate(data.submissionPhaseEnd),
        votingPhaseStart: safelyConvertToDate(data.votingPhaseStart),
        votingPhaseEnd: safelyConvertToDate(data.votingPhaseEnd),
      } as TournamentState;
    });
    
    console.log(`Found ${tournaments.length} tournaments`);
    return tournaments;
  } catch (error) {
    console.error('Error fetching tournaments:', error);
    throw error;
  }
} 