// Set Admin User Script
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, updateDoc, getDoc } = require('firebase/firestore');
const { getAuth, signInWithEmailAndPassword } = require('firebase/auth');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Firebase configuration from your .env file
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Function to set a user as admin
async function setUserAsAdmin(email, password) {
  try {
    // Sign in the user to get their UID
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    
    // Get the user document
    const userDocRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userDocRef);
    
    if (!userDoc.exists()) {
      console.error(`No user document found for uid: ${uid}`);
      return;
    }
    
    // Update the user to be an admin
    await updateDoc(userDocRef, {
      isAdmin: true,
      updatedAt: new Date()
    });

    console.log(`User ${email} (ID: ${uid}) has been set as admin.`);
    
    // Print current user data
    const updatedDoc = await getDoc(userDocRef);
    if (updatedDoc.exists()) {
      console.log('Updated user data:', updatedDoc.data());
    }
  } catch (error) {
    console.error('Error setting admin privileges:', error);
  }
}

// Get email and password from arguments
const args = process.argv.slice(2);
const email = args[0] || 'your-email@example.com';
const password = args[1] || 'your-password';

console.log(`Setting admin privileges for: ${email}`);
setUserAsAdmin(email, password); 