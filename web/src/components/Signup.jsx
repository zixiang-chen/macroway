import React, { useState } from "react";
import { auth } from "../firebase/core";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const check = (email, password, confirmPwd) => {
  if (confirmPwd !== password) {
    throw new Error("unconsistent passwords");
  }
  if (password.length < 6) {
    throw new Error("too simple password");
  }
}

const Signup = () => {
  const [username, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [info, setInfo] = useState("");
  //
  const onSubmit = (e) => {
    e.preventDefault();
    // 
    try {
      check(email, password, confirmPwd);
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          const { user } = userCredential;
          return updateProfile(user, { username });
        })
        .then(() => {
          setInfo("Successful Registered");
        })
        .catch(error => {
          setInfo(error.message);
        });
    } catch (error) {
      setInfo(error.message);
    }
    //
  }

  return (
    <div className="w-full">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="my-4">
          <label htmlFor="username">Username</label>
          <br />
          <input className="border"
            id='username' type='text' value={username} placeholder="optional"
            onChange={e => { setDisplayName(e.target.value); }} />
        </div>
        <div className="my-4">
          <label htmlFor="email">Email</label>
          <br />
          <input className="border"
            id='email' type='email' value={email}
            onChange={e => { setEmail(e.target.value); }} required />
        </div>
        <div className="my-4">
          <label htmlFor="password">Password</label>
          <br />
          <input className="border"
            id='password' type='password' value={password}
            onChange={e => { setPassword(e.target.value); }} required />
        </div>
        <div className="my-4">
          <label htmlFor="confirmPwd">Confirm Password</label>
          <br />
          <input className="border"
            id='confirmPwd' type='password' value={confirmPwd}
            onChange={e => { setConfirmPwd(e.target.value); }} required
          />
        </div>
        <div className="bg-red-400">
          <p className="text-white">{info}</p>
        </div>
        <div className="my-4 text-right">
          <button>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;