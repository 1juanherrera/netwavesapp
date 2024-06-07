import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_GMk8245xnvfYskUQTZaze7XP8YJi6EM",
  authDomain: "netweavesapp.firebaseapp.com",
  projectId: "netweavesapp",
  storageBucket: "netweavesapp.appspot.com",
  messagingSenderId: "741376432343",
  appId: "1:741376432343:web:084e73adbd58698b89b892"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
