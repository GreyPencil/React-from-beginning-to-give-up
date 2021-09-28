import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		messageArr:[
			{id:'01',title:'message1'},
			{id:'02',title:'message2'},
			{id:'03',title:'message3'},
		]
	}
	render() {
		const {messageArr} = this.state
		return ( 
			<div>
				<ul>
					{
						messageArr.map((msgObj)=>{
							return (
								<li key={msgObj.id}>
									{/* 向路由组件传递params参数 */}
									{/* <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
									{/* 向路由组件传递search/query参数 */}
									{/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
									{/* 向路由组件传递state参数 */}
									<Link to={{pathname: '/home/message/detail', state:{id:msgObj.id, title:msgObj.title}}}>{msgObj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				{/* 声明接收params参数 */}
				{/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}
				{/* 声明接收search/query参数 */}
				{/* <Route path="/home/message/detail/" component={Detail}/> */}
				{/* 声明接收state参数 */}
				<Route path="/home/message/detail/" component={Detail}/>
			</div>
		)
	}
}
