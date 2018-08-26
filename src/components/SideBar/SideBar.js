import React from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader.js";
import SideBarForm from "./SideBarForm/SideBarForm.js";
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
        <div className="side-bar__header">
        <SideBarHeader
          activeLogin={this.state.activeLogin}
          toggleSideBar={this.toggleSideBar}
        />
      </div>
      <div className="side-bar__form">
        <SideBarForm activeLogin={this.state.activeLogin} />
      </div>
      </section>
    );
  }
}

export default SideBar;
