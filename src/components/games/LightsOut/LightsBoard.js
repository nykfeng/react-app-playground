import React, { Component } from "react";
import LightBox from "./LightBox";
import "./LightsBoard.css";

class LightsBoard extends Component {
  render() {
    return (
      <table className="lights-board">
        <trow className="table">
          <LightBox isLit="off"/>
          <LightBox isLit="off"/>
          <LightBox isLit="off"/>
          <LightBox isLit="off"/>
          <LightBox isLit="off"/>
        </trow>
      </table>
    );
  }
}

export default LightsBoard;
