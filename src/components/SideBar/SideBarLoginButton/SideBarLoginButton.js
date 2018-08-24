import React from "react";
import "./SideBarLoginButton.css";

function SideBarLoginButton(props) {
  let text = props.activeLogin ? "Log in" : "Register";
  return <button className="side-bar-btn">{text}</button>;
}

export default SideBarLoginButton;
