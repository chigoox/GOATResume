// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEfdlV-qP_b4wlKVP7BCc10M8CPol_460",
  authDomain: "void-appx.firebaseapp.com",
  projectId: "void-appx",
  storageBucket: "void-appx.appspot.com",
  messagingSenderId: "308377499795",
  appId: "1:308377499795:web:8867f775318a594f9e3566",
  measurementId: "G-S9WYWMFDTF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DATABASE = getFirestore(app);
const AUTH = getAuth(app)
const STORAGE = getStorage(app)

export default app
export { DATABASE, AUTH, STORAGE }
