import axios from 'axios';
import React, { Component } from 'react'

export default class index extends Component {

    keyWordElement = React.createRef()

    handleSearch =() => {
        //连续结构＋重命名value
        const {keyWordElement:{current: {value:keyWord}}} = this;
        // console.log(keyWord);
        

        axios.get(`api1/search/users?q=${keyWord}`).then(
            response => {this.props.saveUsers(response.data.items)},
            error => {console.log("failed", error)}
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.keyWordElement} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
             </section>
        )
    }
}
