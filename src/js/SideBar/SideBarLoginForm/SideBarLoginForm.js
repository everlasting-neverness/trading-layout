import React from "react";

class SideBarLoginForm extends React.Component {
  render() {
    return (
      <form className="side-bar-login-form">
        <input type="email" className="form-email" placeholder="email" />
        <input
          type="password"
          className="form-password"
          placeholder="password"
        />
        <button className="btn-view-password">
          <img src="" alt="view" />
        </button>
        <p className="sub-form-text">Forgot password</p>
      </form>
    );
  }
}

export default SideBarLoginForm;
