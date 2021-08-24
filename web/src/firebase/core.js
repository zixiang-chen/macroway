// Firebase App (the core Firebase SDK) is always required and must be listed first
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0WuhW7vmvRg7TP_EQClW5IPmNvzb6wFk",
  authDomain: "mianly.firebaseapp.com",
  projectId: "mianly",
  storageBucket: "mianly.appspot.com",
  messagingSenderId: "632562566547",
  appId: "1:632562566547:web:7c10d3e04b07b6f2dd1466",
  measurementId: "G-E5Z2FXQ10P"
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };