import React from "react";

function SideBarHeaderItem(props) {
  return (
    <a href="#" className={`${props.clName}`} onClick={props.toggleSideBar}>{`${
      props.content
    }`}</a>
  );
}

export default SideBarHeaderItem;
