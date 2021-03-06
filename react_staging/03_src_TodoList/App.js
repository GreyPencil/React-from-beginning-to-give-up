import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {
    todos:
    [
      {id: "001", name: "Eat", done: true},
      {id: "002", name: "Sleep", done: true},
      {id: "003", name: "Shopping", done: false},
      {id: "004", name: "Toileting", done: false}
    ]
  }

  addTodo = (todoObj) => {
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }

  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      if(todoObj.id === id) return {...todoObj, done:done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }

  deleteTodo = (id) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !==id
    })
    this.setState({todos: newTodos})
  }

  checkAll =(done) => {
    const {todos} = this.state
    const newTodos = todos.map((todoObj) => {
      return {...todoObj, done}
    })

    this.setState({todos: newTodos})
  }

  deleteAllDone = (done) => {
    const {todos} = this.state
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done
    })
    this.setState({todos: newTodos})
  }

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos = {todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos = {todos} checkAll = {this.checkAll} deleteAllDone= {this.deleteAllDone}/>
        </div>
     </div>
    ) 
  }
}
