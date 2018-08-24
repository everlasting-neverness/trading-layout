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
    let output;
    if (this.props.activeLogin) {
      output = (
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
    } else {
      output = (
        <form className="side-bar-login-form">
          <input type="email" className="form-input" placeholder="Email" />
          <input
            type="password"
            className="form-input"
            placeholder="Password"
          />
          <input
            type="password"
            className="form-input"
            placeholder="Password confirm"
          />
          <input type="text" className="form-input" placeholder="Name" />
          <input type="text" className="form-input" placeholder="Surname" />
        </form>
      );
    }
    return output;
  }
}

export default SideBarLoginForm;
