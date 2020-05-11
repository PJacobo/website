
import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {
        return (
            <nav id="colorlib-main-nav" role="navigation">
                <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i /></a>
                <div className="js-fullheight colorlib-table">
                    <div className="colorlib-table-cell js-fullheight">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <ul>
                                        <li className="active"><a href="index.html"><span>Home</span></a></li>
                                        <li><a href="about.html"><span>About</span></a></li>
                                        <li><a href="services.html"><span>Services</span></a></li>
                                        <li><a href="work.html"><span>Work</span></a></li>
                                        <li><a href="blog.html"><span>Blog</span></a></li>
                                        <li><a href="contact.html"><span>Contact</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}