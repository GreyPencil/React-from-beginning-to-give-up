import React, { Component } from 'react'
import './index.css'


const UserNameContext = React.createContext()
const {Provider, Consumer} = UserNameContext
export default class A extends Component {

    state={name:'suze', age: '30'}

    render() {
        const {name,age} = this.state
        return (
            <div className="parent">
                <h3>I am A</h3>
                <h4>My name: {name}</h4>
                <Provider value= {{name, age}}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>I am B</h3>
                {/* <h4>My name: </h4> */}
                <C/>
            </div>
        )
    }
}

// class C extends Component {
//     static contextType=UserNameContext
//     render() {
//         return (
//             <div className="grandchild">
//                 <h3>I am C</h3>
//                 <h4>My name: {this.context.name} My age: {this.context.age}</h4>
//             </div>
//         )
//     }
// }

function C(){
    return (
                <div className="grandchild">
                    <h3>I am C</h3>
                    <h4>My name:
                        <Consumer>
                            {
                                value => `${value.name}`
                            }
                        </Consumer>
                    </h4>
                </div>
            )
}