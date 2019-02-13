import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <input
        className="input-class"
        type={this.props.type}
        onChange={(event) => this.props.onChange(event)}
        value={this.props.value}
      />
    );
  }
}

export default InputField;
