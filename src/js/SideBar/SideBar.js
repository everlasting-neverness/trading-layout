import React from "react";
import SideBarHeader from "./SideBarHeader/SideBarHeader.js";
import SideBarLoginForm from "./SideBarLoginForm/SideBarLoginForm.js";
import SideBarLoginButton from "./SideBarLoginButton/SideBarLoginButton.js";

class SideBar extends React.Component {
  render() {
    return (
      <section className="side-bar">
        <SideBarHeader />
        <SideBarLoginForm />
        <SideBarLoginButton />
      </section>
    );
  }
}

export default SideBar;
