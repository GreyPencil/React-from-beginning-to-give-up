import React, { Component } from 'react'

export default class Count extends Component {

    increment = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count + value * 1 })
    }

    decrement = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count - value * 1 })
    }

    incrementIfOdd = () => {

        const { value } = this.selectNumber
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        
    }

    render() {
        // const { count } = this.state
        return (
            <div>
                <h1>Sum: </h1>
                <select name="number" ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button> &nbsp;
                <button onClick={this.decrement}>-</button> &nbsp;
                <button onClick={this.incrementIfOdd}>Increment if odd</button> &nbsp;
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>
        )
    }
}
