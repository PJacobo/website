import React, { Component } from 'react'

export default class Services extends Component {
    render() {
        return (
            <div className="colorlib-services">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
                            <span>Goals</span>
                            <h2>Strategy</h2>
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
                                    <h4>New Technologies</h4>
                                    <h4>Software Design</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services">
                                <span className="icon">
                                    <i className="icon-cog" />
                                </span>
                                <div className="desc">
                                    <h3><a href="#">Engineer</a></h3>
                                    <h4>Back-End Services</h4>
                                    <h4>Front-End Design</h4>
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
                                    <h4>Testing</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}