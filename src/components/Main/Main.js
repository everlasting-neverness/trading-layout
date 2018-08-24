import React from "react";
import Nav from "../Nav/Nav.js";
import SideBar from "../SideBar/SideBar.js";
import Content from "../Content/Content.js";
import Footer from "../Footer/Footer.js";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <SideBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Main;
