import React, { Component } from "react";
import "./LightBox.css";

class LightBox extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.flipCellsAroundme();
  }

  render() {
    return (
      <td
        className="lightCell"
        light={this.props.isLit ? "on" : "off"}
        onClick={this.handleClick}
      ></td>
    );
  }
}

export default LightBox;
