import React from "react";

class ContentItem extends React.Component {
  render() {
    return (
      <div className="content-item">
        <h3 className="content-item-title">{this.props.item.title}</h3>
        <p className="content-item-content">{this.props.item.content}</p>
      </div>
    );
  }
}

export default ContentItem;
