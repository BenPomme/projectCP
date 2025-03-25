// Simple Admin Script
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Firebase configuration - FILL THESE IN FROM YOUR .env FILE
const firebaseConfig = {
  apiKey: "AIzaSyAKldnUYPVfKQJr_WCuhME7-vIgP78pFaY",
  authDomain: "kingcp-a0065.firebaseapp.com",
  projectId: "kingcp-a0065",
  storageBucket: "kingcp-a0065.appspot.com",
  messagingSenderId: "458668479328",
  appId: "1:458668479328:web:f909a8d33931c57bf67d2e"
};

console.log('Firebase config loaded');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Function to set a user as admin
async function setUserAsAdmin(email, password) {
  try {
    console.log(`Signing in as ${email}...`);
    // Sign in the user to get their UID
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    console.log(`Successfully signed in. User UID: ${uid}`);
    
    // Get the user document
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      console.error(`No user document found for uid: ${uid}`);
      return;
    }
    
    console.log('Current user data:', userDoc.data());
    
    // Update the user to be an admin
    await updateDoc(userDocRef, {
      isAdmin: true,
      updatedAt: new Date()
    });

    console.log(`User ${email} (ID: ${uid}) has been set as admin.`);
    
    // Print updated user data
    const updatedDoc = await getDoc(userDocRef);
    if (updatedDoc.exists()) {
      console.log('Updated user data:', updatedDoc.data());
    }
  } catch (error) {
    console.error('Error setting admin privileges:', error);
    console.error(error.stack);
  }
}

// Get email and password from arguments
const args = process.argv.slice(2);
const email = args[0];
const password = args[1];

if (!email || !password) {
  console.error('Please provide both email and password');
  console.log('Usage: node simple-admin.mjs your-email@example.com your-password');
  process.exit(1);
}

console.log(`Setting admin privileges for: ${email}`);
setUserAsAdmin(email, password).catch(console.error); 