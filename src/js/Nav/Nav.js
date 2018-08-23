import React from "react";
import Logo from "./Logo/Logo.js";
import NavBar from "./NavBar/NavBar.js";
import NavLoginButton from "./NavLoginButton/NavLoginButton.js";

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Logo />
        <NavBar />
        <NavLoginButton />
      </nav>
    )
  }
}

export default Nav;
