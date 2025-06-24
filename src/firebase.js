// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB_wdk6lL6ptOFLwrSlzuubO48vs29sCL4",
  authDomain: "t-d-j-8ed4a.firebaseapp.com",
  databaseURL: "https://t-d-j-8ed4a-default-rtdb.firebaseio.com",
  projectId: "t-d-j-8ed4a",
  storageBucket: "t-d-j-8ed4a.firebasestorage.app",
  messagingSenderId: "241528140530",
  appId: "1:241528140530:web:c026da2f853579c576d66b",
  measurementId: "G-Q7ZSNKF9HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
