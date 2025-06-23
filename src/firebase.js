import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_wdk6lL6ptOFLwrSlzuubO48vs29sCL4",
  authDomain: "t-d-j-8ed4a.firebaseapp.com",
  projectId: "t-d-j-8ed4a",
  storageBucket: "t-d-j-8ed4a.appspot.com",
  messagingSenderId: "241528140530",
  appId: "1:241528140530:web:c026da2f853579c576d66b",
  measurementId: "G-Q7ZSNKF9HQ"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

const auth = getAuth(app);

export { auth };
