import React from "react";
import SideBarHeaderItem from "./SideBarHeaderItem.js";
import "./SideBarHeader.css";

class SideBarHeader extends React.Component {
  render() {
    let firstItem, secondItem;
    if (this.props.activeLogin) {
      firstItem = {
        clName: "side-bar-header-left",
        content: "Log in"
      };
      secondItem = {
        clName: "side-bar-header-right",
        content: "Register"
      };
    } else {
      firstItem = {
        clName: "side-bar-header-left",
        content: "Register"
      };
      secondItem = {
        clName: "side-bar-header-right",
        content: "Log in"
      };
    }
    return (
      <div className="side-bar-header">
        <SideBarHeaderItem
          clName={firstItem.clName}
          content={firstItem.content}
          toggleSideBar={this.props.toggleSideBar}
        />
        <span>or </span>
        <SideBarHeaderItem
          clName={secondItem.clName}
          content={secondItem.content}
          toggleSideBar={this.props.toggleSideBar}
        />
      </div>
    );
  }
}

export default SideBarHeader;
