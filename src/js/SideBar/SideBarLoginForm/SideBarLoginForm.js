import React from "react";

class SideBarLoginForm extends React.Component {
  render() {
    return (
      <form className="side-bar-login-form">
        <input type="email" className="form-email" placeholder="Email" />
        <div className="form-password-block">
          <input
            type="password"
            className="form-password"
            placeholder="Password"
          />
          <button className="btn-view-password">
            <img src="" alt="view" />
          </button>
          <p className="sub-form-text">Forgot password</p>
        </div>
      </form>
    );
  }
}

export default SideBarLoginForm;
