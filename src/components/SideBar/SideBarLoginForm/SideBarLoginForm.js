import React from "react";
import "./SideBarLoginForm.css";

class SideBarLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleBtnViewClick = this.handleBtnViewClick.bind(this);
    this.state = {
      img: require("../../../static/img/password-button/active/group-13-copy.png")
    };
  }

  handleBtnViewClick(e) {
    e.preventDefault();
    if (
      this.state.img ===
      require("../../../static/img/password-button/active/group-13-copy.png")
    ) {
      this.setState({
        img: require("../../../static/img/password-button/disabled/group-13-copy-5.png")
      });
    } else {
      this.setState({
        img: require("../../../static/img/password-button/active/group-13-copy.png")
      });
    }
  }

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
          <button
            className="btn-view-password"
            onClick={this.handleBtnViewClick}
          >
            <img
              src={this.state.img}
              alt="view"
              className="btn-view-password-img"
            />
          </button>
          <p className="sub-form-text">
            <a href="#">Forgot password</a>
          </p>
        </div>
      </form>
    );
  }
}

export default SideBarLoginForm;
