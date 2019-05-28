import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto text-center text-title text-uppercase mt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>Page not found</h2>
                        <h3>the url <span className="text-danger">{this.props.location.pathname}</span>is not valid</h3>
                    </div>
                </div>
            </div>
        )
    }
}
