import React from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader.js";
import SideBarForm from "./SideBarForm/SideBarForm.js";
import SideBarExecButton from "./SideBarExecButton/SideBarExecButton.js";
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
        <SideBarForm activeLogin={this.state.activeLogin} />
        <SideBarExecButton activeLogin={this.state.activeLogin} />
      </section>
    );
  }
}

export default SideBar;
