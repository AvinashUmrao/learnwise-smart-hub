// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // ✅ add this import

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5wpEweuTgEeDi5urfmLAV23NOo2gU4MA",
  authDomain: "minor-a7beb.firebaseapp.com",
  projectId: "minor-a7beb",
  storageBucket: "minor-a7beb.firebasestorage.app",
  messagingSenderId: "965830968663",
  appId: "1:965830968663:web:b3ede852e1897222b4aa12",
  measurementId: "G-NRX9B7WRQW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Initialize Firebase Auth and export it
export const auth = getAuth(app);