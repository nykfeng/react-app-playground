import React, { Component } from "react";
import uuid from "uuid/v4";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Milk", qty: "2 gallons", id: uuid() },
        { name: "Bread", qty: "2 loaves", id: uuid() },
      ],
    };
  }
  //   addItem(item) {
  //     this.setState((oldState) => ({
  //       items: [...oldState.items, item],
  //     }));
  //   }

  addItem(item) {
    let newItem = { ...item, id: uuid() };
    this.setState((oldState) => ({
      items: [...oldState.items, newItem],
    }));
  }

  handleSubmit(evt) {
    evt.preventDefault();
    // this.state = { name: "", qty: ""}
    this.props.addItem(this.state);
  }

  render() {
    return <ShoppingListform addItem={this.addItem} />;
  }
}

export default Note;
