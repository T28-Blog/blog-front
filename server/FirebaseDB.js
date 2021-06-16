const myFirebase = require("firebase");

const REALTIMEDB_URL =
  "https://team28blog-1e912-default-rtdb.asia-southeast1.firebasedatabase.app/";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: REALTIMEDB_URL,
};

myFirebase.initializeApp(firebaseConfig);

module.exports = myFirebase;
