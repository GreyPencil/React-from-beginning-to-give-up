import React, { Component } from 'react'

export default class Demo extends Component {

    state= {count: 0}

    add = () => {
        // const {count} = this.state
        // this.setState({count: count+1})
        this.setState(state=>({count: state.count+1}))
    }

    render() {
        return (
            <div>
                <h2>count: {this.state.count}</h2>
                <button onClick={this.add}>click me to add 1</button>
            </div>
        )
    }
}
