import React from "react";
import UserIcon from "./UserIcon";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/articles'>Articles</Link>
          </li>
        </ul>
      </nav>
      <UserIcon />
    </div>
  )
}

export default Header;