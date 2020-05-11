import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="colorlib-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                            <span>What I Do</span>
                            <h2>Strategy, design and a bit of magic</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-magnifying-glass" />
                                </span>
                                <div className="desc">
                                    <h3><a href="#">Explore</a></h3>
                                    <h4>Design Sprints</h4>
                                    <h4>Product Strategy</h4>
                                    <h4>UX Strategy</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-layers" />
                                </span>
                                <div className="desc">
                                    <h3><a href="#">Create</a></h3>
                                    <h4>Information</h4>
                                    <h4>UX/UI Design</h4>
                                    <h4>Branding</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-lightbulb" />
                                </span>
                                <div className="desc">
                                    <h3><a href="#">Learn</a></h3>
                                    <h4>Prototyping</h4>
                                    <h4>User Testing</h4>
                                    <h4>UI Testing</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}