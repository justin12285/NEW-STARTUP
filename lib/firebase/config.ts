// Firebase Configuration
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB5_5N_Zut-NpmyxC4f2uJBaWtL0XLQ0q8",
  authDomain: "new-startup-cdbde.firebaseapp.com",
  projectId: "new-startup-cdbde",
  storageBucket: "new-startup-cdbde.firebasestorage.app",
  messagingSenderId: "52937884928",
  appId: "1:52937884928:web:2fafa5090a3be6612edfe5",
  measurementId: "G-E2K6ZDS9T9",
  databaseURL: "https://new-startup-cdbde-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const realtimeDb = getDatabase(app);

export default app;
