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
  submissionPhaseEnd: Date;
  votingPhaseEnd: Date;
  createdAt: Date;
  updatedAt: Date;
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
export const createEntry = async (entry: Omit<Entry, 'id' | 'createdAt' | 'updatedAt' | 'voteCount'>) => {
  const newEntry = {
    ...entry,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    voteCount: 0
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
  return querySnapshot.docs.map(doc => doc.data() as Entry);
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
  const newVote = {
    ...vote,
    createdAt: Timestamp.now()
  };
  
  const docRef = await addDoc(collection(db, 'votes'), newVote);
  
  // Update entry vote count
  const entryRef = doc(db, 'entries', vote.entryId);
  await updateDoc(entryRef, {
    voteCount: increment(1)
  });
  
  return { id: docRef.id, ...newVote };
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

// Tournament state functions
export const getTournamentState = async (): Promise<TournamentState | null> => {
  const docRef = doc(db, 'tournament', 'current');
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) {
    return null;
  }
  return {
    id: docSnap.id,
    ...docSnap.data(),
    submissionPhaseEnd: docSnap.data().submissionPhaseEnd.toDate(),
    votingPhaseEnd: docSnap.data().votingPhaseEnd.toDate(),
    createdAt: docSnap.data().createdAt.toDate(),
    updatedAt: docSnap.data().updatedAt.toDate()
  } as TournamentState;
};

export const updateTournamentState = async (state: Partial<TournamentState>): Promise<void> => {
  const docRef = doc(db, 'tournament', 'current');
  const docSnap = await getDoc(docRef);
  
  if (!docSnap.exists()) {
    await initializeTournamentState();
  }
  
  await updateDoc(docRef, {
    ...state,
    updatedAt: Timestamp.now()
  });
};

export const initializeTournamentState = async (): Promise<void> => {
  // Set default tournament state with current phase as submission
  // Set submission phase to end in 7 days, voting phase to end in 14 days
  const now = new Date();
  const submissionEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const votingEnd = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
  
  await setDoc(doc(db, 'tournament', 'current'), {
    currentPhase: 'submission',
    submissionPhaseEnd: Timestamp.fromDate(submissionEnd),
    votingPhaseEnd: Timestamp.fromDate(votingEnd),
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  });
}; 