import firebaseApp from "./core";
import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(firebaseApp);
const authStateListener = onAuthStateChanged(auth, (user) => {
  if (user) {
    //
  } else {
    //
  }
});

authStateListener();