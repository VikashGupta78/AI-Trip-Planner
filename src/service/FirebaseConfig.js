// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPC6K0VRzempMB5h6EMVluYwv2-EAkocQ",
  authDomain: "ai-trip-planner-6677d.firebaseapp.com",
  projectId: "ai-trip-planner-6677d",
  storageBucket: "ai-trip-planner-6677d.firebasestorage.app",
  messagingSenderId: "578061238555",
  appId: "1:578061238555:web:09ffbb0e9c85cd873393be",
  measurementId: "G-8X5PP35Q25"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);