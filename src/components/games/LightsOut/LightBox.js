import React, { Component } from "react";
import "./LightBox.css";

class LightBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLit: "off",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.flipCellsAroundme();
  }

  render() {
    return <div className="lightCell" light={this.props.isLit}></div>;
  }
}

export default LightBox;
