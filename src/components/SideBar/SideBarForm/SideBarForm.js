import React from "react";
import SideBarInputField from "./SideBarInputField/SideBarInputField.js";
import "./SideBarForm.css";

class SideBarForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleBtnViewHover = this.handleBtnViewHover.bind(this);
    this.handleBtnViewClick = this.handleBtnViewClick.bind(this);
    this.state = {
      active: false,
      hover: false
    };
  }

  handleBtnViewHover(e) {
    this.setState({ hover: !this.state.hover });
  }

  handleBtnViewClick(e) {
    e.preventDefault();
    this.setState({ active: !this.state.active });
  }

  render() {
    let output;
    if (this.props.activeLogin) {
      output = (
        <form className="side-bar-form">
          <SideBarInputField type={"email"} placeholder={"Email"} />
          <div className="form-password-block">
            <SideBarInputField
              type={`${this.state.active ? "text" : "password"}`}
              placeholder={"Password"}
            />
            <button
              className={`btn-view-password
                ${
                  this.state.hover && !this.state.active
                    ? "view-password-hovered-disabled"
                    : ""
                }
                ${
                  this.state.hover && this.state.active
                    ? "view-password-hovered-active"
                    : ""
                }
                ${
                  this.state.active
                    ? "view-password-active"
                    : "view-password-disabled"
                }
                `}
              onMouseEnter={this.handleBtnViewHover}
              onMouseLeave={this.handleBtnViewHover}
              onClick={this.handleBtnViewClick}
            />
            <p className="sub-form-text">
              <a href="#">Forgot password</a>
            </p>
          </div>
        </form>
      );
    } else {
      output = (
        <form className="side-bar-form">
          <SideBarInputField type={"email"} placeholder={"Email"} />
          <SideBarInputField type={"password"} placeholder={"Password"} />
          <SideBarInputField
            type={"password"}
            placeholder={"Password confirm"}
          />
          <SideBarInputField type={"text"} placeholder={"Name"} />
          <SideBarInputField type={"text"} placeholder={"Surname"} />
        </form>
      );
    }
    return output;
  }
}

export default SideBarForm;
