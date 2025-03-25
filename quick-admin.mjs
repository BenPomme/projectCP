// Quick Admin Script using ES Modules
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';

// Load environment variables from frontend .env file
const envFile = readFileSync('./frontend/.env', 'utf-8');
const envVars = dotenv.parse(envFile);

// Firebase configuration from your .env file
const firebaseConfig = {
  apiKey: envVars.VITE_FIREBASE_API_KEY,
  authDomain: envVars.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: envVars.VITE_FIREBASE_PROJECT_ID,
  storageBucket: envVars.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVars.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: envVars.VITE_FIREBASE_APP_ID
};

console.log('Firebase config:', firebaseConfig);

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
  console.log('Usage: node quick-admin.mjs your-email@example.com your-password');
  process.exit(1);
}

console.log(`Setting admin privileges for: ${email}`);
setUserAsAdmin(email, password).catch(console.error); 