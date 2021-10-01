import React, { Component } from 'react'

// export default class Demo extends Component {

// 	state = {count:0}

// 	add = ()=>{
// 		//对象式的setState
// 		/* //1.获取原来的count值
// 		const {count} = this.state
// 		//2.更新状态
// 		this.setState({count:count+1},()=>{
// 			console.log(this.state.count);
// 		})
// 		//console.log('12行的输出',this.state.count); //0 */

// 		//函数式的setState
// 		this.setState( state => ({count:state.count+1}))
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

	return (
		<div>
			<h1>Count：{count}</h1>
			<h1>Myname: {name}</h1>
			<button onClick={add}>click me +1</button>
			<button onClick={changeName}>click me to change my name</button>
		</div>
	)
}

