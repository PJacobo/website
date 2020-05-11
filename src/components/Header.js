import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="colorlib-navbar-brand">
                                <a className="colorlib-logo" href="index.html">P.J.(site under construction)</a>
                            </div>
                            <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}