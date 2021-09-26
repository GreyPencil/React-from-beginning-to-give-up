import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>Completed: 0</span> / All tasks: 2
                </span>
                <button className="btn btn-danger">Clear all compoleted tasks</button>
            </div>
        )
    }
}
