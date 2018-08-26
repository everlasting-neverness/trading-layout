import React from "react";
import Logo from "./Logo/Logo.js";
import NavBar from "./NavBar/NavBar.js";
import NavLoginButton from "./NavLoginButton/NavLoginButton.js";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav className="nav">
        <Logo />
        <NavBar />
        <div className="nav-element-last">
          <NavLoginButton />
        </div>
      </nav>
    )
  }
}

export default Nav;
