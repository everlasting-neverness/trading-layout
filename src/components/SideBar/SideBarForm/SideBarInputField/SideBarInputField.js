import React from "react";
import "./SideBarInputField.css";

class SideBarInputField extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlaceholder = this.handlePlaceholder.bind(this);
    this.state = {
      empty: true
    };
  }

  handlePlaceholder(e) {
    this.setState({ empty: e.target.value ? false : true });
  }

  render() {
    return (
      <div className="input-field">
        <input
          type={this.props.type}
          className="input-field__input"
          onBlur={this.handlePlaceholder}
        />
        <span
          className={`input-field__placeholder ${
            this.state.empty ? "" : "input-field__placeholder-up"
          }`}
        >
          {this.props.placeholder}
        </span>
      </div>
    );
  }
}

export default SideBarInputField;
