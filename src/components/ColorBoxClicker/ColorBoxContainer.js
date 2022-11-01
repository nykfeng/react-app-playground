import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxContainer.css";

class ColorBoxContainer extends Component {
  static defaultProps = {
    numberBox: 18,
    allColors: ["purple", "magenta", "violet", "teal"]
  };

  render() {
    const boxes = Array.from({ length: this.props.numberBox }).map(() => (
      <ColorBox allColors={this.props.allColors}/>
    ));
    return <div className="color-box-container">{boxes}</div>;
  }
}

export default ColorBoxContainer;
