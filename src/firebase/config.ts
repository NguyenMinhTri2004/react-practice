// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC4mO6rlTPqWq0zf9nBBnlMfNmylCkZY-A',
  authDomain: 'react-tma.firebaseapp.com',
  projectId: 'react-tma',
  storageBucket: 'react-tma.firebasestorage.app',
  messagingSenderId: '997111293512',
  appId: '1:997111293512:web:717265376ac2e115469a7d',
  measurementId: 'G-MBF54GNY6Q',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const providerGoogle = new GoogleAuthProvider();
export const providerFacebook = new FacebookAuthProvider();
export const auth = getAuth();
const analytics = getAnalytics(app);
