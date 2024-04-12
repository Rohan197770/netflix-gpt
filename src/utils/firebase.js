// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJtLaHts_r_Ne-zLzNdojseMXSQ58Qg3w",
  authDomain: "netflixgpt-c5c10.firebaseapp.com",
  projectId: "netflixgpt-c5c10",
  storageBucket: "netflixgpt-c5c10.appspot.com",
  messagingSenderId: "745673081779",
  appId: "1:745673081779:web:e9b52b34a09f0dfb4441c6",
  measurementId: "G-ZCF1P32RW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();