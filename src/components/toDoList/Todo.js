import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className="todo-item">
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.task}</li>
            </div>
        )
    }
}

export default Todo;