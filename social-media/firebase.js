// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDMc-3o5x4LVDkZccmms2Q_30XiBDEzgIU',
  authDomain: 'react-learning-1a872.firebaseapp.com',
  databaseURL:
    'https://react-learning-1a872-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'react-learning-1a872',
  storageBucket: 'react-learning-1a872.appspot.com',
  messagingSenderId: '376053212190',
  appId: '1:376053212190:web:a31e4de2dcf6bd77f83a0f',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
