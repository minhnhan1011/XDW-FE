// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAV5k1fZUnUO_ThnwGhoMJaXU7Uj8vZods",
  authDomain: "flight-xdpmw.firebaseapp.com",
  projectId: "flight-xdpmw",
  storageBucket: "flight-xdpmw.appspot.com",
  messagingSenderId: "107940459054",
  appId: "1:107940459054:web:c573290886f48ad23a25bf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export { auth, googleProvider, facebookProvider };
