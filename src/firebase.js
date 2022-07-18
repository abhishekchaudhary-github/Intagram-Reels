// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// import Firebase from './components/Firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-ii9hAveMknPSlfU40_H-ItPa6RhCuIE",
  authDomain: "reels-8b11a.firebaseapp.com",
  projectId: "reels-8b11a",
  storageBucket: "reels-8b11a.appspot.com",
  messagingSenderId: "32179744648",
  appId: "1:32179744648:web:31352f5abbb36fbb73543d",
  measurementId: "G-NN02KD1WJD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth=firebase.auth();

const firestore=firebase.firestore();

export const database={
  users : firestore.collection('users'),
  posts : firestore.collection('posts'),
  getTimeStamp : firebase.firestore.serverTimestamp,
}

export const storage=firebase.storage();