// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCE9ITW8j-hMIQs4Dky5qEaRnd-aU0occw",
  authDomain: "chataku-94feb.firebaseapp.com",
  projectId: "chataku-94feb",
  storageBucket: "chataku-94feb.firebasestorage.app",
  messagingSenderId: "1060397245400",
  appId: "1:1060397245400:web:a5f105b5a37604a9a048ad",
  measurementId: "G-YHQKD9J7GD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
