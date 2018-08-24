import React from "react";
import "./ContentItem.css";

class ContentItem extends React.Component {
  render() {
    return (
      <div className="content-item">
        <img className="content-item-logo" src={`${this.props.item.img}`} alt="item-logo" />
        <h3 className="content-item-title">{this.props.item.title}</h3>
        <p className="content-item-content">{this.props.item.content}</p>
      </div>
    );
  }
}

export default ContentItem;
