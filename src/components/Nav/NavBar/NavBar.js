import React from "react";
import "./NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <ul className="navbar">
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            Trading
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            Documentation
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-item-link">
            API
          </a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
