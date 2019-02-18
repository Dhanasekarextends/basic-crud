import React, { Component } from "react";

class CheckBox extends Component {
  render() {
    return (
      <input
        type="checkbox"
        value={this.props.value}
        onChange={(event)=>this.props.onChange(event)}
        checked={this.props.checked}
      />
    );
  }
}

export default CheckBox;
