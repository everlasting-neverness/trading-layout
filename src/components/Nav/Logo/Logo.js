import React from 'react';
import './Logo.css';

class Logo extends React.Component {
  render() {
    // No polyfill, IE will use `src` attribute
    let imgSet = `${require('../../../static/img/nav-logo/w-copy-3.png')}, ${require('../../../static/img/nav-logo/w-copy-3@2x.png')} 2x, ${require('../../../static/img/nav-logo/w-copy-3@3x.png')} 3x`;
    return (
      <div className="nav-logo">
        <img
          srcSet={imgSet}
          src={require('../../../static/img/nav-logo/w-copy-3.png')}
          alt="logo"
          className="nav-logo-img"
        />
      </div>
    );
  }
}

export default Logo;
