
import { firebase } from "firebase/copat/app";
import { getAuth } from 'firebase/auth'
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEBdOhvdSOI7edrAWHAJJ2LxEVj-36_xA",
  authDomain: "clone-ff3f8.firebaseapp.com",
  projectId: "clone-ff3f8",
  storageBucket: "clone-ff3f8.firebasestorage.app",
  messagingSenderId: "7917270432",
  appId: "1:7917270432:web:c1c45190dbc2d4f355a0c5"
};

// Initialize Firebase
const App = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(App)
export const db =App.firestore()