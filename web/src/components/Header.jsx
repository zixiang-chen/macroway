import React from "react";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="">
      <nav className="">
        <div className="">
          <Link to='/'>Home</Link>
        </div>
        <div className="">
          <Link to='/articles'>Articles</Link>
        </div>
        <div className="">
          <UserIcon />
        </div>
      </nav>
    </div>
  )
}

export default Header;