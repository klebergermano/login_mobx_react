import React, { Component } from "react";
class InputField extends Component {
  render() {
    return (
      <div className="input_field">
        <input
          type={this.props.type}
          value={this.props.value}
          placeholder={this.props.placeholder}
          name={this.props.name}
          onChange={(e) => this.props.onChange(e.target.value)}
        />
      </div>
    );
  }
}

export default InputField;
