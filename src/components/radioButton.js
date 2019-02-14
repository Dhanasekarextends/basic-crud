import React, { Component } from "react";

class RadioButton extends Component {
  render() {
    return (
      <input
        type="radio"
        value={this.props.value}
        onChange={(event)=>this.props.onChange(event)}
        checked={this.props.checked}
      />
    );
  }
}

export default RadioButton;
