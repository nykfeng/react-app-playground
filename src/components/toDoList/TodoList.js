import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }

  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  }

  remove(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    });
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // you don't do todo.task = updatedTask
        // because this is returning an object
        // also we don't loop through the original state
        // to change. Because in React, state is immutable
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    // we create a copy of the array and change with new element inside
    // then assign a new state
    this.setState({
      todos: updatedTodos,
    });
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    this.setState({
      todos: updatedTodos,
    });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <Todo
          id={todo.id}
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleCompletion={this.toggleCompletion}
        />
      );
    });

    return (
      <div className="todo-list-container">
        <h1>Todo List!!</h1>
        <NewTodoForm createTodo={this.create} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
