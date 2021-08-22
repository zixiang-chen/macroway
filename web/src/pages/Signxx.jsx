import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";


const Signxx = () => {
  const [registered, setRegistered] = useState(false);
  const onSwitchClick = (e) => {
    setRegistered(!registered);
  }

  return (
    <div>
      {registered ? <Signin /> : <Signup />}
      <button onClick={(e) => onSwitchClick(e)}>Switch</button>
    </div>
  )
}

export default Signxx;