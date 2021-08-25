import React, { useState } from "react";
import { auth } from "../firebase/core";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
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
        console.log(userCredential);
      })
      .catch(error => {
        setInfo(error.message);
      });
    //
  }

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input className="border"
            id='email' type='email' value={email} onChange={e => onEmailChanged(e)} required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input id='password' type='password' value={password} onChange={e => onPasswordChanged(e)} required />
        </div>
        <div>
          <p>{info}</p>
        </div>
        <div>
          <button className="bg-red-500">
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;