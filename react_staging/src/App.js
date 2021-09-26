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
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos = {todos}/>
          <Footer />
        </div>
     </div>
    ) 
  }
}
