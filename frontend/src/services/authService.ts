import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import { trackEvent, AnalyticsEvents } from '../utils/analytics';

export interface User {
  id: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Register with email and password
export const register = async (email: string, password: string, displayName?: string): Promise<User> => {
  try {
    // Validate email format
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email format');
    }

    // Validate password strength
    if (!password || password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update profile if displayName is provided
    if (displayName) {
      await updateProfile(userCredential.user, { displayName });
    }

    const user: User = {
      id: userCredential.user.uid,
      email: userCredential.user.email!,
      displayName: userCredential.user.displayName || undefined,
      isAdmin: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // Only add photoURL if it exists
    if (userCredential.user.photoURL) {
      user.photoURL = userCredential.user.photoURL;
    }
    
    // Create user document in Firestore
    await setDoc(doc(db, 'users', user.id), user);
    
    trackEvent(AnalyticsEvents.USER_SIGNED_UP);
    return user;
  } catch (error: any) {
    let errorMessage = 'Failed to register';
    
    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'This email is already registered';
        break;
      case 'auth/invalid-email':
        errorMessage = 'Invalid email format';
        break;
      case 'auth/operation-not-allowed':
        errorMessage = 'Email/password accounts are not enabled. Please contact support.';
        break;
      case 'auth/weak-password':
        errorMessage = 'Password should be at least 6 characters';
        break;
      default:
        errorMessage = error.message || 'Failed to register';
    }

    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: errorMessage,
      error_code: error.code
    });
    
    throw new Error(errorMessage);
  }
};

// Login with email and password
export const login = async (email: string, password: string): Promise<User> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    
    if (!userDoc.exists()) {
      throw new Error('User document not found');
    }
    
    trackEvent(AnalyticsEvents.USER_SIGNED_IN);
    return userDoc.data() as User;
  } catch (error) {
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: error.message,
      error_code: error.code
    });
    throw error;
  }
};

// Login with Google
export const loginWithGoogle = async (): Promise<User> => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    
    // Check if user exists in Firestore
    const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
    
    if (!userDoc.exists()) {
      // Create new user document if it doesn't exist
      const user: User = {
        id: userCredential.user.uid,
        email: userCredential.user.email!,
        displayName: userCredential.user.displayName || undefined,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      // Only add photoURL if it exists
      if (userCredential.user.photoURL) {
        user.photoURL = userCredential.user.photoURL;
      }
      
      await setDoc(doc(db, 'users', user.id), user);
      trackEvent(AnalyticsEvents.USER_SIGNED_UP, { method: 'google' });
    }
    
    trackEvent(AnalyticsEvents.USER_SIGNED_IN, { method: 'google' });
    return userDoc.exists() ? userDoc.data() as User : user;
  } catch (error) {
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: error.message,
      error_code: error.code
    });
    throw error;
  }
};

// Logout
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    trackEvent(AnalyticsEvents.USER_SIGNED_OUT);
  } catch (error) {
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: error.message,
      error_code: error.code
    });
    throw error;
  }
};

// Reset password
export const resetPassword = async (email: string): Promise<void> => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: error.message,
      error_code: error.code
    });
    throw error;
  }
};

// Get current user
export const getCurrentUser = (): Promise<FirebaseUser | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
};

// Auth state observer
export const onAuthStateChange = (callback: (user: FirebaseUser | null) => void) => {
  return onAuthStateChanged(auth, callback);
}; 