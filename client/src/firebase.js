// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "bookify-e9a1a.firebaseapp.com",
  projectId: "bookify-e9a1a",
  storageBucket: "bookify-e9a1a.firebasestorage.app",
  messagingSenderId: "188654429358",
  appId: "1:188654429358:web:1a3c3d06c36fec33f6b93f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);