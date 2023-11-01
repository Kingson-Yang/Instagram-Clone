// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMXDvxd470IWgaXKNeM4UcokvZ1TVLFmg",
  authDomain: "instagram-clone-545ca.firebaseapp.com",
  projectId: "instagram-clone-545ca",
  storageBucket: "instagram-clone-545ca.appspot.com",
  messagingSenderId: "484784601447",
  appId: "1:484784601447:web:d285493638bbff3e86d7c2",
  measurementId: "G-0WQXWB9K18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);