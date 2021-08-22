import React, { useState } from "react";
import firebaseApp from "../firebase/core";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const check = (email, password, confirmPwd) => {
  if (confirmPwd !== password) {
    throw new Error("unconsistent passwords");
  }
  if (password.length < 8) {
    throw new Error("password must contain more 8 characters");
  }
}

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [info, setInfo] = useState("");
  //
  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
  }
  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }
  const onConfirmPwdChanged = (e) => {
    setConfirmPwd(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // 
    try {
      check(email, password, confirmPwd);
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const { uid } = userCredential.user;
          setInfo(uid);
        })
        .catch(error => {
          const { message } = error;
          setInfo(message);
        })
    } catch (error) {
      setInfo(error.message);
    }
    //
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input id='email' type='email' value={email} onChange={e => onEmailChanged(e)} required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input id='password' type='password' value={password} onChange={e => onPasswordChanged(e)} required />
        </div>
        <div>
          <label htmlFor="confirmPwd">Confirm Password</label>
          <br />
          <input id='confirmPwd' type='password' value={confirmPwd} onChange={e => onConfirmPwdChanged(e)} required />
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