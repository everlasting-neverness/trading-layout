import React from "react";

function SideBarHeaderItem(props) {
  return <a href="#" className={`${props.clName}`}>{`${props.content}`}</a>;
}

export default SideBarHeaderItem;
