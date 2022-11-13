import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ task: "Walking the dog" }, { task: "buyg something" }],
    };
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });

    return <div className="todo-list-container">{todos}</div>;
  }
}

export default TodoList;
