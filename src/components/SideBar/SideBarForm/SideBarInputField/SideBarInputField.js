import React from "react";
import "./SideBarInputField.css";

function SideBarInputField(props) {
  return (
    <div className="input-field">
      <input type={props.type} className="input-field__input"/>
      <span className="input-field__placeholder">{props.placeholder}</span>
    </div>
  );
}

export default SideBarInputField;
