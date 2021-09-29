import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action_creators'

export default class Count extends Component {
    // state = { count: 0 }

    // componentDidMount(){
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    increment = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count + value * 1 })
        store.dispatch(createIncrementAction(value*1))
    }

    decrement = () => {
        const { value } = this.selectNumber
        // const { count } = this.state
        // this.setState({ count: count - value * 1 })
        store.dispatch(createDecrementAction(value*1))
    }

    incrementIfOdd = () => {

        const { value } = this.selectNumber
        const count  = store.getState()
        if (count % 2 !== 0) {
            // store.dispatch({type: 'increment', data: value*1})
            store.dispatch(createIncrementAction(value*1))
        }
    }

    incrementAsync = () => {
        const {value} = this.selectNumber
        // const {count} = this.state
        setTimeout(() => {
            // store.dispatch({type: 'increment', data: value*1})
            store.dispatch(createIncrementAction(value*1))
        },1000)
        
    }

    render() {
        // const { count } = this.state
        return (
            <div>
                <h1>Sum: {store.getState()}</h1>
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
