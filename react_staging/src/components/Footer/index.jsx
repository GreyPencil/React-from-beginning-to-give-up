import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        const {todos} = this.props;
        const totalCount = todos.length;
        const doneCount = todos.reduce((pre, todo) => 
            pre + (todo.done ? 1:0) , 0
        )
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>Completed: {doneCount}</span> / All tasks: {totalCount}
                </span>
                <button className="btn btn-danger" onClick={this.handleDelete}>Clear all compoleted tasks</button>
            </div>
        )
    }
}
