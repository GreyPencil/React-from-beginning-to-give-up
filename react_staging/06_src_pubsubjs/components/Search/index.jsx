import axios from 'axios';
import Pubsub from 'pubsub-js'
import React, { Component } from 'react'

export default class index extends Component {

    keyWordElement = React.createRef()

    handleSearch = () => {
        //连续结构＋重命名value
        const { keyWordElement: { current: { value: keyWord } } } = this;
        // console.log(keyWord);

        Pubsub.publish('kangsuze', { isFirst: false, isLoading: true })
        // this.props.updateAppState({ isFirst: false, isLoading: true })

        axios.get(`api1/search/users?q=${keyWord}`).then(
            response => {
                Pubsub.publish('kangsuze', {
                    users: response.data.items,
                    isLoading: false
                })
            },
            error => {
                Pubsub.publish('kangsuze', {
                    isLoading: false,
                    err: error.message
                })
            }
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={this.keyWordElement} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}
