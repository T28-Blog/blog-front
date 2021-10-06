import { initializeApp } from 'firebase/app';
<<<<<<< HEAD:src/firebase.js
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
=======
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
>>>>>>> 008f710119b66b05643fe70f2ab79e24249bd2ca:src/api/Firebase.js

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_ID,
<<<<<<< HEAD:src/firebase.js
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const analytics = getAnalytics(app);
=======
};

const actionCodeSettings = {
  url: 'http://localhost:3000',
  handleCodeInApp: true,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {
  auth,
  actionCodeSettings,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
};
>>>>>>> 008f710119b66b05643fe70f2ab79e24249bd2ca:src/api/Firebase.js
