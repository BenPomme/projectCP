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
  Timestamp
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
  title: string;
  description?: string;
  imageUrl: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
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
  rating: number;
  createdAt: Timestamp;
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
  const newEntry = {
    ...entry,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    voteCount: 0,
    averageRating: 0
  };
  
  const docRef = await addDoc(collection(db, 'entries'), newEntry);
  return { id: docRef.id, ...newEntry };
};

export const getEntry = async (id: string): Promise<Entry | null> => {
  const docRef = doc(db, 'entries', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } as Entry : null;
};

export const getEntries = async (): Promise<Entry[]> => {
  const entriesQuery = query(collection(db, 'entries'), orderBy('createdAt', 'desc'));
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

export const submitVote = async (entryId: string, rating: number): Promise<void> => {
  try {
    const user = auth.currentUser;
    if (!user) {
      throw new Error('You must be logged in to vote');
    }

    console.log(`Submitting vote for entry ${entryId} with rating ${rating}`);
    
    // Create the vote
    const voteResult = await createVote({
      userId: user.uid,
      entryId,
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

// Entry submission helper
export const submitEntry = async ({ title, description, image, userId }: { 
  title: string; 
  description: string; 
  image: File;
  userId: string;
}): Promise<Entry> => {
  try {
    // Get user
    const userDoc = await getDoc(doc(db, 'users', userId));
    const userData = userDoc.data();
    
    // Upload image
    const imagePath = `entries/${userId}/${Date.now()}_${image.name}`;
    const imageUrl = await uploadImage(image, imagePath);
    
    // Create entry with user display name
    const entry = await createEntry({
      userId,
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

// Tournament state functions
export const getTournamentState = async (): Promise<TournamentState | null> => {
  const docRef = doc(db, 'tournament', 'current');
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    // Initialize the tournament state if it doesn't exist
    await initializeTournamentState();
    // Get the newly created document
    const newDocSnap = await getDoc(docRef);
    if (!newDocSnap.exists()) {
      return null;
    }
    const data = newDocSnap.data();
    return {
      id: newDocSnap.id,
      ...data,
      submissionPhaseStart: data.submissionPhaseStart?.toDate() || new Date(),
      submissionPhaseEnd: data.submissionPhaseEnd?.toDate() || new Date(),
      votingPhaseStart: data.votingPhaseStart?.toDate() || new Date(),
      votingPhaseEnd: data.votingPhaseEnd?.toDate() || new Date(),
      createdAt: data.createdAt?.toDate() || new Date(),
      updatedAt: data.updatedAt?.toDate() || new Date(),
      maxEntriesPerUser: data.maxEntriesPerUser || null,
      maxVotesPerUser: data.maxVotesPerUser || null,
      votingQuestion: data.votingQuestion || "How would you rate this entry?"
    } as TournamentState;
  }

  const data = docSnap.data();
  return {
    id: docSnap.id,
    ...data,
    submissionPhaseStart: data.submissionPhaseStart?.toDate() || new Date(),
    submissionPhaseEnd: data.submissionPhaseEnd?.toDate() || new Date(),
    votingPhaseStart: data.votingPhaseStart?.toDate() || new Date(),
    votingPhaseEnd: data.votingPhaseEnd?.toDate() || new Date(),
    createdAt: data.createdAt?.toDate() || new Date(),
    updatedAt: data.updatedAt?.toDate() || new Date(),
    maxEntriesPerUser: data.maxEntriesPerUser || null,
    maxVotesPerUser: data.maxVotesPerUser || null,
    votingQuestion: data.votingQuestion || "How would you rate this entry?"
  } as TournamentState;
};

export const updateTournamentState = async (state: Partial<TournamentState>): Promise<void> => {
  const docRef = doc(db, 'tournament', 'current');
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    await initializeTournamentState();
  }
  
  // Convert Date objects to Timestamps
  const updateData: any = {
    ...state,
    updatedAt: Timestamp.now()
  };

  // Convert any Date objects to Timestamps
  if (state.submissionPhaseStart instanceof Date) {
    updateData.submissionPhaseStart = Timestamp.fromDate(state.submissionPhaseStart);
  }
  if (state.submissionPhaseEnd instanceof Date) {
    updateData.submissionPhaseEnd = Timestamp.fromDate(state.submissionPhaseEnd);
  }
  if (state.votingPhaseStart instanceof Date) {
    updateData.votingPhaseStart = Timestamp.fromDate(state.votingPhaseStart);
  }
  if (state.votingPhaseEnd instanceof Date) {
    updateData.votingPhaseEnd = Timestamp.fromDate(state.votingPhaseEnd);
  }

  await updateDoc(docRef, updateData);
};

export const initializeTournamentState = async (): Promise<void> => {
  console.log('Initializing tournament state');
  
  // Set default tournament state with current phase as submission
  const now = new Date();
  const submissionStart = now;
  const submissionEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const votingStart = submissionEnd;
  const votingEnd = new Date(votingStart.getTime() + 7 * 24 * 60 * 60 * 1000);
  
  const defaultTournamentState = {
    currentPhase: 'submission',
    submissionPhaseStart: Timestamp.fromDate(submissionStart),
    submissionPhaseEnd: Timestamp.fromDate(submissionEnd),
    votingPhaseStart: Timestamp.fromDate(votingStart),
    votingPhaseEnd: Timestamp.fromDate(votingEnd),
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    // Default values for new settings
    maxEntriesPerUser: null, // Unlimited by default
    maxVotesPerUser: null, // Unlimited by default
    votingQuestion: "How would you rate this entry?" // Default voting question
  };
  
  console.log('Default tournament state:', defaultTournamentState);
  
  await setDoc(doc(db, 'tournament', 'current'), defaultTournamentState);
  console.log('Tournament state initialized successfully');
}; 