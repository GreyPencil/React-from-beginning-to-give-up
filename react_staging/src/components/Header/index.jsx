import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import PropTypes from 'prop-types'
import './index.css'

export default class Header extends Component {

    static propTypes = {
        addTodo:PropTypes.func.isRequired
    }

    handleKeyUp = (e) => {
        if(e.keyCode !== 13) return
        console.log(e.target.value);
        if(e.target.value.trim() === '') {
            alert("add could not be empty")
            return
        }
        const todoObj = {id: nanoid(), name: e.target.value, done: false}
        //子组件传入父组件data：
        this.props.addTodo(todoObj) 
        e.target.value = ''
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="Please add a task in tasks "/>
            </div>
        )
    }
}
