import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.task,
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  handleSave(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    // re-toggle it back out of edit state
    this.handleEdit();
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: [evt.target.value],
    });
  }

  handleToggle() {
    this.props.toggleCompletion(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="todo-item Todo">
          <form className="Todo-edit-form" onSubmit={this.handleSave}>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todo-item Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.handleEdit}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default Todo;
