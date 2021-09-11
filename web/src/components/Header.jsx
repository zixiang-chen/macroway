import React, { useState, useContext } from "react";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";
import { userContext } from "../util";
import UserMenu from "./UserMenu";
import SignUI from "./SignUI";


const Header = () => {
  const [hidden, setHidden] = useState(true);
  const userObj = useContext(userContext);

  return (
    <div className="w-full bg-indigo-200">
      <nav className="w-3/4 mx-auto text-2xl flex justify-between">
        <div>
          <Link to='/'>Home</Link>
          <Link className="ml-8" to='/profile'>About</Link>
          <Link className="ml-8" to='/projects'>Projects</Link>
        </div>
        <div onClick={e => { setHidden(!hidden); }}>
          <UserIcon signined={userObj == null ? false : true} />
        </div>
      </nav>
      {
        hidden ? (
          null
        ) : (
          <div className="w-3/4 mx-auto">
            <div className="relative">
              <div className="w-30 absolute right-0 leading-8 my-1 bg-indigo-50">
                {
                  (userObj != null) ? (
                    <UserMenu />
                  ) : (
                    <SignUI isUp={false} />
                  )
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Header;