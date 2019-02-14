import React, { Component } from "react";

class TextArea extends Component {
  render() {
    return (
      <div>
        <textarea
          className="text-area-class"
          rows="4"
          cols="50"
          onChange={event => this.props.onChange(event)}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default TextArea;
