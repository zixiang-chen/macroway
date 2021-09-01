import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";


const SignUI = ({ isUp }) => {
  const [switcher, setSwitcher] = useState(isUp);

  return (switcher ? (
    <div>
      <Signup />
      <div className="text-left">
        <span className="cursor-pointer"
          onClick={e => { setSwitcher(!switcher) }}
        >
          Sign In
        </span>
      </div>
    </div>
  ) : (
    <div>
      <Signin />
      <div className="text-left">
        <span className="cursor-pointer"
          onClick={e => { setSwitcher(!switcher) }}
        >
          Sign Up
        </span>
      </div>
    </div>
  )
  );

}

export default SignUI;