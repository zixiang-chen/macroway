import React, { useState } from "react";
import { auth } from "../firebase/core";
import { signInWithEmailAndPassword } from "firebase/auth";


const Signin = () => {
  //
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  //
  const onPasswordChanged = (e) => {
    setPassword(e.target.value);
  }
  const onEmailChanged = (e) => {
    setEmail(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    // 
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // console.log(userCredential);
      })
      .catch(error => {
        setInfo(error.message);
      });
    //
  }

  return (
    <div className="w-full">
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="my-4">
          <label htmlFor="email">Email</label>
          <br />
          <input className="border"
            id='email' type='email' value={email} required
            onChange={e => onEmailChanged(e)}
          />
        </div>
        <div className="my-4">
          <label htmlFor="password">Password</label>
          <br />
          <input className="border"
            id='password' type='password' value={password} required
            onChange={e => onPasswordChanged(e)}
          />
        </div>
        <div className="bg-red-400">
          <p className="text-white">{info}</p>
        </div>
        <div className="my-4 text-right">
          <button type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin;