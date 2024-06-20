// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5d09c.firebaseapp.com",
  projectId: "mern-blog-5d09c",
  storageBucket: "mern-blog-5d09c.appspot.com",
  messagingSenderId: "703647706224",
  appId: "1:703647706224:web:d8d751b5bb671a2cc258b5",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
