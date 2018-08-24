import React from "react";
import "./SideBarLoginForm.css";

class SideBarLoginForm extends React.Component {
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
    return (
      <form className="side-bar-login-form">
        <input type="email" className="form-input" placeholder="Email" />
        <div className="form-password-block">
          <input
            type={`${this.state.active ? "text" : "password"}`}
            className="form-input"
            placeholder="Password"
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
  }
}

export default SideBarLoginForm;
