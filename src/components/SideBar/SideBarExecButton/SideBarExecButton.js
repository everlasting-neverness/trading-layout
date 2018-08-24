import React from "react";
import "./SideBarExecButton.css";

function SideBarExecButton(props) {
  let text = props.activeLogin ? "Log in" : "Register";
  return <button className="side-bar-btn">{text}</button>;
}

export default SideBarExecButton;
