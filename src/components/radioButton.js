import React, { Component } from "react";

class RadioButton extends Component {
  render() {
    return (
      <input
        type="radio"
        value={this.props.value}
        onChange={this.props.onClick}
        checked={this.props.checked}
      />
    );
  }
}

export default RadioButton;
