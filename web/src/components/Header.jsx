import React, { useState, useContext } from "react";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";
import { userContext } from "../util";
import UserMenu from "./UserMenu";
import Login from "./Login";


const Header = () => {
  const [hidden, setHidden] = useState(true);
  const userObj = useContext(userContext);

  return (
    <div className="w-full bg-gray-200">
      <nav className="w-2/3 mx-auto flex justify-between">
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div onClick={e => { setHidden(!hidden); }}>
          <UserIcon signined={userObj == null ? false : true} />
        </div>
      </nav>
      {
        hidden ? (
          null
        ) : (
          <div className="w-2/3 mx-auto">
            <div className="relative">
              <div className="w-30 absolute right-0 leading-8 my-1">
                {
                  (userObj != null) ? (
                    <UserMenu />
                  ) : (
                    <Login />
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