import React, { useState } from "react";
import { auth } from "../firebase/core";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const check = (email, password, confirmPwd) => {
  if (confirmPwd !== password) {
    throw new Error("unconsistent passwords");
  }
  if (password.length < 8) {
    throw new Error("too simple password");
  }
}

const Signup = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [info, setInfo] = useState("");
  //
  const onSubmit = (e) => {
    e.preventDefault();
    // 
    check(email, password, confirmPwd);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const { user } = userCredential;
        return updateProfile(user, { displayName });
      })
      .then(() => {
        setInfo("Successful Registered");
      })
      .catch(error => {
        const { message } = error;
        setInfo(message);
      });
    //
  }

  return (
    <div>
      <form
        onSubmit={(e) => onSubmit(e)}
      >
        <div>
          <label htmlFor="displayName">Display Name</label>
          <br />
          <input
            id='displayName' type='text' value={displayName} placeholder="optional"
            onChange={e => { setDisplayName(e.target.value); }} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            id='email' type='email' value={email}
            onChange={e => { setEmail(e.target.value); }} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            id='password' type='password' value={password}
            onChange={e => { setPassword(e.target.value); }} required />
        </div>
        <div>
          <label htmlFor="confirmPwd">Confirm Password</label>
          <br />
          <input
            id='confirmPwd' type='password' value={confirmPwd}
            onChange={e => { setConfirmPwd(e.target.value); }} required
          />
        </div>
        <div>
          <p>{info}</p>
        </div>
        <div>
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;