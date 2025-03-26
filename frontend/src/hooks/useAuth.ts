import { useState, useEffect } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../services/authService';
import { onAuthStateChange, getCurrentUser } from '../services/authService';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      try {
        if (firebaseUser) {
          console.log('Firebase user authenticated:', firebaseUser.uid);
          // Get user document from Firestore
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          
          if (userDoc.exists()) {
            const userData = userDoc.data() as User;
            console.log('User data from Firestore:', userData);
            console.log('isAdmin status:', userData.isAdmin);
            setUser(userData);
          } else {
            console.log('User document not found in Firestore');
            setUser(null);
          }
        } else {
          console.log('No Firebase user authenticated');
          setUser(null);
        }
      } catch (err) {
        console.error('Error in auth state change:', err);
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    error,
    isAuthenticated: !!user,
    isAdmin: user?.isAdmin || false
  };
  
  console.log('useAuth hook returning:', authData);
  
  return authData;
} 