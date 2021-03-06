import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    state = {mouse: false}

    handleMouse=(flag) => {
       return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck =(id) => {
        return (e) => {
           this.props.updateTodo(id, e.target.checked) 
        }
        
    }

    handleDelete = (id) => {
        if(window.confirm('You want to remove?')){
            this.props.deleteTodo(id)
        }
    }
    
    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{backgroundColor: mouse? "#ddd" : "white"}}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={() => {this.handleDelete(id)}}>Delete</button>
            </li>
        )
    }
}
