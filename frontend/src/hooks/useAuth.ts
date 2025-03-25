import { useState, useEffect } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { User } from '../services/authService';
import { onAuthStateChange, getCurrentUser } from '../services/authService';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(async (firebaseUser: FirebaseUser | null) => {
      try {
        if (firebaseUser) {
          const currentUser = await getCurrentUser();
          if (currentUser) {
            setUser({
              id: currentUser.uid,
              email: currentUser.email!,
              displayName: currentUser.displayName || undefined,
              photoURL: currentUser.photoURL || undefined,
              isAdmin: false, // You'll need to fetch this from Firestore
              createdAt: new Date(),
              updatedAt: new Date()
            });
          }
        } else {
          setUser(null);
        }
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user
  };
} 