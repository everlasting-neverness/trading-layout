import React from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader.js";
import SideBarLoginForm from "./SideBarLoginForm/SideBarLoginForm.js";
import SideBarLoginButton from "./SideBarLoginButton/SideBarLoginButton.js";
import "./SideBar.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeLogin: true,
    }
  }

  render() {
    return (
      <section className="side-bar">
        <SideBarHeader activeLogin={this.state.activeLogin} />
        <SideBarLoginForm />
        <SideBarLoginButton />
      </section>
    );
  }
}

export default SideBar;
