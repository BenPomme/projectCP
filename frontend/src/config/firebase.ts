import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBqeebps7CNCQw_xis2DKiGHMRYmurj_B4",
  authDomain: "kingcp-a0065.firebaseapp.com",
  projectId: "kingcp-a0065",
  storageBucket: "kingcp-a0065.firebasestorage.app",
  messagingSenderId: "550768863932",
  appId: "1:550768863932:web:acabd2d2584b8165a7beb9",
  measurementId: "G-QRVT5F6VGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 