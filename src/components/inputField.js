import React, { Component } from "react";

class InputField extends Component {
  render() {
    return (
      <input
        className="input-class"
        type={this.props.type}
        pattern={this.props.pattern}
        onChange={(event) => this.props.onChange(event)}
        value={this.props.value}
      />
    );
  }
}

export default InputField;
