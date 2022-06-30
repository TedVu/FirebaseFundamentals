// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9YSjryTDp-Y78dzbgBDXJ0zIF6uifA6A",
  authDomain: "fir-fundamentals-93877.firebaseapp.com",
  projectId: "fir-fundamentals-93877",
  storageBucket: "fir-fundamentals-93877.appspot.com",
  messagingSenderId: "49274167390",
  appId: "1:49274167390:web:31629cf54383aee33414cf",
  measurementId: "G-GBSB3PZEZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);
