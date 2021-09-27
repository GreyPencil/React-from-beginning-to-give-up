import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleCheckAll = (e) => {
        this.props.checkAll(e.target.checked);
    }

    handleDeleteAllDone =(id) => {
        if(window.confirm('You want to remove?')){
            this.props.deleteAllDone(id)
        }
    }

    render() {
        const {todos, id} = this.props;
        const totalCount = todos.length;
        const doneCount = todos.reduce((pre, todo) => 
            pre + (todo.done ? 1:0) , 0
        )
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked = {doneCount === totalCount && totalCount !==0 ? true:false}/>
                </label>
                <span>
                    <span>Completed: {doneCount}</span> / All tasks: {totalCount}
                </span>
                <button className="btn btn-danger" onClick={()=>{this.handleDeleteAllDone(id)}}>Clear all compoleted tasks</button>
            </div>
        )
    }
}
