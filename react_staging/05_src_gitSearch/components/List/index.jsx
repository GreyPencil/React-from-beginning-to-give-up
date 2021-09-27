import React, { Component } from 'react'
import './index.css'

export default class index extends Component {

    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h2>Welcome to Git Search</h2> :
                    isLoading ? <img alt='loading'  src = 'https://i.stack.imgur.com/ATB3o.gif'/> :
                    err ? <h2 style={{color:"red"}}>{err}</h2> :
                    users.map((userObj) => {
                        return (
                            <div className="card" key={userObj.id}>
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                    <img alt="avater" src={userObj.avatar_url} style={{ width: '100px' }} />
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
