import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <ul>
    <li>
      <NavLink exact to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact to="/about">
        About
      </NavLink>
    </li>
    <li>
      <NavLink to="/topics">Topics</NavLink>
    </li>
  </ul>
);

export default Header;
