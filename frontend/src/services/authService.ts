import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile,
  User as FirebaseUser,
  signInWithRedirect,
  getRedirectResult
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db, googleProvider } from '../config/firebase';
import { trackEvent, AnalyticsEvents } from '../utils/analytics';
import { useAuthStore } from '../store/authStore';

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
    try {
      console.log('Creating user document in Firestore:', user);
      await setDoc(doc(db, 'users', user.id), user);
      console.log('User document created successfully');
    } catch (firestoreError: any) {
      console.error('Error creating user document:', firestoreError);
      // Don't throw here, as the user is already created in Auth
      // Just log the error for debugging
    }
    
    // Get token and update auth store - THIS IS THE KEY FIX
    try {
      const token = await userCredential.user.getIdToken();
      console.log('Got ID token for new user');
      useAuthStore.getState().login(user, token);
      console.log('Updated auth store after registration');
    } catch (tokenError: any) {
      console.error('Error getting token:', tokenError);
      // Still don't throw, as the user is created
    }
    
    trackEvent(AnalyticsEvents.USER_SIGNED_UP);
    return user;
  } catch (error: any) {
    console.error('Registration error:', error);
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
    console.log('Attempting to login with email:', email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful, fetching user data');
    
    let userData: User;
    
    try {
      const userDoc = await getDoc(doc(db, 'users', userCredential.user.uid));
      
      if (!userDoc.exists()) {
        console.log('User document not found, creating one');
        // Create user document if it doesn't exist (fallback)
        userData = {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
          displayName: userCredential.user.displayName || undefined,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        // Only add photoURL if it exists
        if (userCredential.user.photoURL) {
          userData.photoURL = userCredential.user.photoURL;
        }
        
        await setDoc(doc(db, 'users', userData.id), userData);
      } else {
        console.log('User document found');
        userData = userDoc.data() as User;
      }
    } catch (firestoreError) {
      console.error('Error fetching/creating user document:', firestoreError);
      // Fallback to basic user data if Firestore fails
      userData = {
        id: userCredential.user.uid,
        email: userCredential.user.email!,
        displayName: userCredential.user.displayName || undefined,
        photoURL: userCredential.user.photoURL || undefined,
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
    
    // Get token
    const token = await userCredential.user.getIdToken();
    console.log('Got ID token');
    
    // Update auth store
    useAuthStore.getState().login(userData, token);
    console.log('Updated auth store');
    
    trackEvent(AnalyticsEvents.USER_SIGNED_IN);
    return userData;
  } catch (error: any) {
    console.error('Login error:', error);
    let errorMessage = 'Failed to login';
    
    switch (error.code) {
      case 'auth/invalid-email':
        errorMessage = 'Invalid email format';
        break;
      case 'auth/user-disabled':
        errorMessage = 'This account has been disabled';
        break;
      case 'auth/user-not-found':
        errorMessage = 'No account found with this email';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Incorrect password';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Too many failed login attempts. Please try again later.';
        break;
      default:
        errorMessage = error.message || 'Failed to login';
    }
    
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, {
      error_message: errorMessage,
      error_code: error.code
    });
    
    throw new Error(errorMessage);
  }
};

// Login with Google
export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    
    // Configure proper OAuth behavior
    provider.setCustomParameters({
      prompt: 'select_account',
      login_hint: 'user@gmail.com'
    });
    
    // Add required scopes
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile');

    // Use signInWithRedirect instead of popup to avoid COOP issues
    await signInWithRedirect(auth, provider);
    
    return null; // The redirect will happen, so no return value is needed
  } catch (error: any) {
    console.error('Google login error:', error);
    
    let errorMessage = 'Failed to login with Google';
    if (error.code === 'auth/popup-closed-by-user') {
      errorMessage = 'Login was cancelled';
    } else if (error.code === 'auth/popup-blocked') {
      errorMessage = 'Login popup was blocked. Please allow popups for this site.';
    } else if (error.code === 'auth/cancelled-popup-request') {
      errorMessage = 'Another login attempt is in progress';
    }

    // Track login error
    trackEvent(AnalyticsEvents.ERROR_OCCURRED, { 
      method: 'google',
      error: errorMessage
    });

    throw new Error(errorMessage);
  }
};

// Add a function to handle redirect result
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;
      
      // Get the ID token
      const idToken = await user.getIdToken();
      
      // Check if user exists in Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      
      let userData: User;
      
      if (!userDoc.exists()) {
        // Create new user document if it doesn't exist
        userData = {
          id: user.uid,
          email: user.email!,
          displayName: user.displayName || undefined,
          isAdmin: false,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        
        // Only add photoURL if it exists
        if (user.photoURL) {
          userData.photoURL = user.photoURL;
        }
        
        await setDoc(doc(db, 'users', userData.id), userData);
        trackEvent(AnalyticsEvents.USER_SIGNED_UP, { method: 'google' });
      } else {
        userData = userDoc.data() as User;
      }
      
      // Update auth store
      useAuthStore.getState().login(userData, idToken);
      
      trackEvent(AnalyticsEvents.USER_SIGNED_IN, { method: 'google' });
      
      // Navigate to dashboard after successful login
      window.location.href = '/projectCP/dashboard';
      
      return userData;
    }
    return null;
  } catch (error) {
    console.error('Error handling redirect result:', error);
    return null;
  }
};

// Logout
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    useAuthStore.getState().logout();
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