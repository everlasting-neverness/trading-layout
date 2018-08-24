import React from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader.js";
import SideBarLoginForm from "./SideBarLoginForm/SideBarLoginForm.js";
import SideBarLoginButton from "./SideBarLoginButton/SideBarLoginButton.js";
import "./SideBar.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.state = {
      activeLogin: true
    };
  }

  toggleSideBar() {
    this.setState({ activeLogin: !this.state.activeLogin });
  }

  render() {
    return (
      <section className="side-bar">
        <SideBarHeader
          activeLogin={this.state.activeLogin}
          toggleSideBar={this.toggleSideBar}
        />
        <SideBarLoginForm activeLogin={this.state.activeLogin} />
        <SideBarLoginButton activeLogin={this.state.activeLogin} />
      </section>
    );
  }
}

export default SideBar;
