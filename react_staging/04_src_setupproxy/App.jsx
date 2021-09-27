import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    handleClick = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => {console.log('succeed', response.data)},
            error => {console.log('failed', error)}
        )
        
    }

    handleClickCar = () => {
        axios.get('http://localhost:3000/api2/cars').then(
            response => {console.log('succeed', response.data)},
            error => {console.log('failed', error)}
        )
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me to get Student data</button>
                <hr/>
                <button onClick={this.handleClickCar}>Click me to get Car data</button>
            </div>
        )
    }
}
