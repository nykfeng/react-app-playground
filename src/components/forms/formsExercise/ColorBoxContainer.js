import React, { Component } from "react";
import ColorBox from "./ColorBox";
import NewBoxForm from "./NewBoxForm";

class ColorBoxContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.create = this.create.bind(this);
  }

  remove(id) {
    this.setState({
      boxes: this.state.boxes.filter((box) => box.id !== id),
    });
  }

  create(newBox) {
    this.setState({ boxes: [...this.state.boxes, newBox] });
  }

  render() {
    const boxes = this.state.boxes.map((box) => (
      <ColorBox
        height={box.height}
        width={box.width}
        color={box.color}
        key={box.id}
        id={box.id}
        removeBox={() => this.remove(box.id)}
      />
    ));
    return (
      <div>
        <h1 style={{ color: "white" }}>Color Box Maker</h1>
        <NewBoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

export default ColorBoxContainer;
