import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ለ Vite ትክክለኛው አጻጻፍ ይህ ነው
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "my-new--clone.firebaseapp.com",
  projectId: "my-new--clone",
  storageBucket: "my-new--clone.firebasestorage.app",
  messagingSenderId: "746906210602",
  appId: "1:746906210602:web:b49cf7be3574da7ad24e53"
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Export Services (Auth and Firestore)
export const auth = getAuth(app);
export const db = getFirestore(app);
