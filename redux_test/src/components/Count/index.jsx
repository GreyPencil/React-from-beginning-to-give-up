import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }

    increment = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count + value * 1 })
    }

    minus = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }

    incrementIfOdd = () => {

        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        setTimeout(() => {
            this.setState({count: count+value*1})
        },1000)
        
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h1>Sum: {count}</h1>
                <select name="number" ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select> &nbsp;
                <button onClick={this.increment}>+</button> &nbsp;
                <button onClick={this.minus}>-</button> &nbsp;
                <button onClick={this.incrementIfOdd}>Increment if odd</button> &nbsp;
                <button onClick={this.incrementAsync}>Increment async</button>
            </div>
        )
    }
}
