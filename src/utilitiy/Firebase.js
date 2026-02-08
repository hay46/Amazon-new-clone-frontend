import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // ለ Vite ትክክለኛው አጻጻፍ ይህ ነው
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "clone-ff3f8.firebaseapp.com",
  projectId: "clone-ff3f8",
  storageBucket: "clone-ff3f8.firebasestorage.app",
  messagingSenderId: "7917270432",
  appId: "1:7917270432:web:c1c45190dbc2d4f355a0c5"
};

// 1. Initialize Firebase App
const app = initializeApp(firebaseConfig);

// 2. Export Services (Auth and Firestore)
export const auth = getAuth(app);
export const db = getFirestore(app);