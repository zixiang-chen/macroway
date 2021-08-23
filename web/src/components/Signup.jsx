import React, { useState } from "react";
import firebaseApp from "../firebase/core";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const check = (email, password, confirmPwd) => {
  if (confirmPwd !== password) {
    throw new Error("unconsistent passwords");
  }
  if (password.length < 8) {
    throw new Error("too simple password");
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
    <div className="container w-80 mx-auto bg-gray-100">
      <form className="space-y-5"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="">
          <label htmlFor="email">Email</label>
          <br />
          <input className="w-full ring-1"
            id='email' type='email' value={email} onChange={e => onEmailChanged(e)} required />
        </div>
        <div className="">
          <label htmlFor="password">Password</label>
          <br />
          <input className="w-full ring-1"
            id='password' type='password' value={password} onChange={e => onPasswordChanged(e)} required />
        </div>
        <div className="">
          <label htmlFor="confirmPwd">Confirm Password</label>
          <br />
          <input className="w-full ring-1"
            id='confirmPwd' type='password' value={confirmPwd} onChange={e => onConfirmPwdChanged(e)} required
          />
        </div>
        <div className="text-red-500">
          <p>{info}</p>
        </div>
        <div className="text-center text-white">
          <button className="bg-indigo-300 w-2/5">Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;