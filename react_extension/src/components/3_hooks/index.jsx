import React, { Component} from 'react'
import { ReactDOM } from 'react-dom';

// export default class Demo extends Component {

// 	state = {count:0}

// 	add = ()=>{
// 		this.setState( state => ({count:state.count+1}))
// 	}

// 	componentDidMount(){
// 		setInterval(() => {
// 			this.setState(state => ({count:state.count+1}))
// 		}, 1000)
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Count：{this.state.count}</h1>
// 				<button onClick={this.add}>click me +1</button>
// 			</div>
// 		)
// 	}
// }

export default function Demo() {

	const [count, setCount] = React.useState(0);
	const [name, setName] = React.useState("suze")

	function add(){
		// setCount(count+1)
		setCount(count => count+1)
	}

	function changeName(){
		setName("surun")
	}

	// function unmount(){
	// 	ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	// }

	function unmount(){
		ReactDOM.unmountComponentAtNode(document.getElementById('root'))
	}

	React.useEffect(()=>{
		let timer = setInterval(()=>{
			setCount(count => count+1 )
		},1000)
		return ()=>{
			clearInterval(timer)
		}
	},[])

	return (
		<div>
			<h1>Count：{count}</h1>
			<h1>Myname: {name}</h1>
			<button onClick={add}>click me +1</button>
			<button onClick={changeName}>click me to change my name</button>
			<button onClick={unmount}>unmount</button>
		</div>
	)
}

