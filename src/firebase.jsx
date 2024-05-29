// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "sisi-klien-salma-13372.firebaseapp.com",
  projectId: "sisi-klien-salma-13372",
  storageBucket: "sisi-klien-salma-13372.appspot.com",
  messagingSenderId: "496060981860",
  appId: "1:496060981860:web:a8a71b8a04cb023b4d7571",
  measurementId: "G-9YWCFD41TH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();