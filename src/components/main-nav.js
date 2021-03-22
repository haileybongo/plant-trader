import {NavLink} from "react-router-dom";
import React from "react";

const MainNav = () => (
  <div className="navbar-nav mr-auto">
    <NavLink
      to="/"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Home
    </NavLink>
    <NavLink
      to="/profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Profile
    </NavLink>
    <NavLink
      to="/edit-profile"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      Edit Profile
    </NavLink>
    <NavLink
      to="/upload-image"
      exact
      className="nav-link"
      activeClassName="router-link-exact-active"
    >
      New Image
    </NavLink>
  </div>
);

export default MainNav;
