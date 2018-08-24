import React from "react";
import SideBarHeaderLogin from "./SideBarHeaderLogin.js";
import SideBarHeaderRegister from "./SideBarHeaderRegister.js";
import "./SideBarHeader.css";

class SideBarHeader extends React.Component {
  render() {
    return (
      <div className="side-bar-header">
        <SideBarHeaderLogin />
        <SideBarHeaderRegister />
      </div>
    )
  }
}

export default SideBarHeader;
