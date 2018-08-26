import React from 'react';
import SideBarHeaderItem from './SideBarHeaderItem.js';
import './SideBarHeader.css';

class SideBarHeader extends React.Component {
  render() {
    let firstItem, secondItem;
    if (this.props.activeLogin) {
      firstItem = {
        content: 'Log\u00A0in',
      };
      secondItem = {
        content: 'Register',
      };
    } else {
      firstItem = {
        content: 'Register',
      };
      secondItem = {
        content: 'Log\u00A0in',
      };
    }
    return (
      <div className="side-bar-header">
        <h3 className="side-bar-header-heading">{firstItem.content}</h3>
        <div>
          <span>or</span>
          <SideBarHeaderItem
            className="side-bar-header-right"
            content={secondItem.content}
            toggleSideBar={this.props.toggleSideBar}
          />
        </div>
      </div>
    );
  }
}

export default SideBarHeader;
