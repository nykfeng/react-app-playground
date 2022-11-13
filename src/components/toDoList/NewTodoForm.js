import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value],
    });
  }

  render() {
    return (
      <form>
        <label for="task">New Todo</label>
        <input
          id="task"
          type="text"
          placeholder="New task"
          value={this.state.task}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default NewTodoForm;
