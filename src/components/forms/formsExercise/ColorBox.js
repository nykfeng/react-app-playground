import React, { Component } from "react";

class ColorBox extends Component {
  render() {
    return (
      <div className="color-box-component">
        <div className="color-box" style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
        }}></div>
        <button onClick={this.props.removeBox}>Remove Box</button>
      </div>
    );
  }
}

export default ColorBox;
