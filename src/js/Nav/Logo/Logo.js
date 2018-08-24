import React from "react";

class Logo extends React.Component {
  render() {
    const img = require('../../../static/img/nav-logo/w-copy-3.png');
    return (
      <div className="nav-logo">
        <img src={img} alt="logo" className="nav-logo-img" />
      </div>
    );
  }
}

export default Logo;
