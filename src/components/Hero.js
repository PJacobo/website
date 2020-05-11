import React, { Component } from 'react'

export default class Chero extends Component {
    render() {
        return (

            <div id="colorlib-hero" className="js-fullheight">
                <p className="social-media">
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Dribbble</a>
                </p>
                <div className="owl-carousel">
                    <div className="item">
                        <div className="hero-flex js-fullheight">
                            <div className="col-three-forth">
                                <div className="hero-img js-fullheight" style={{ backgroundImage: 'url(images/suit.jpg)' }} />
                            </div>
                            <div className="col-one-forth js-fullheight">
                                <div className="display-t js-fullheight">
                                    <div className="display-tc js-fullheight">
                                        <div className="text-inner">
                                            <div className="desc">
                                                <h2>I’m Paul.</h2>
                                                <p><a href="work.html" className="btn-view">Hire me now <i className="icon-arrow-right3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="hero-flex js-fullheight">
                            <div className="col-three-forth">
                                <div className="hero-img js-fullheight" style={{ backgroundImage: 'url(images/suit2.jpg)' }} />
                            </div>
                            <div className="col-one-forth js-fullheight">
                                <div className="display-t js-fullheight">
                                    <div className="display-tc js-fullheight">
                                        <div className="text-inner">
                                            <div className="desc">
                                                <h2>I'm a programmer &amp; based in Dallas.</h2>
                                                <p><a href="work.html" className="btn-view">Hire me now <i className="icon-arrow-right3" /></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}