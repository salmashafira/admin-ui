// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "sisi-klien-salma-13372.firebaseapp.com",
  projectId: "sisi-klien-salma-13372",
  storageBucket: "sisi-klien-salma-13372.appspot.com",
  messagingSenderId: "496060981860",
  appId: "1:496060981860:web:a8a71b8a04cb023b4d7571",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);