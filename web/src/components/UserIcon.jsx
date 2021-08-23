import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import firebaseApp from "../firebase/core";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Editor from "./Editor";


const UserIcon = () => {
  const [logined, setLogined] = useState(false)
  useEffect(() => {
    // check login state
    const auth = getAuth(firebaseApp);
    const authStateObserver = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLogined(true);
      } else {
        // nothing
      }
    });
    // cleanup: unsubscribe
    return authStateObserver;
  });
  // 

  return (
    logined ? (
      <div>
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <Editor />
      </div>
    ) : (
      <div>
        <Link to="/login">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </Link>
      </div>
    )
  );
}

export default UserIcon;