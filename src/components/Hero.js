import React, { Component } from 'react'

export default class Chero extends Component {
    render() {
        return (

            <div id="colorlib-hero" className="js-fullheight">
                <p className="social-media">
                    <a target="_blank" href="https://www.linkedin.com/in/pauljacobo3725/">Linkedin</a>
                    <a target="_blank" href="https://github.com/PJacobo">Github</a>
                    <a target="_blank" href="PaulJacobo.2020.May.Resume.A1.pdf" className="btn-view">Resume</a>

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
                                                <h2>Hello Everyone! <br></br>I'm Paul!</h2>
                                                <p><a href="work.html" className="btn-view">Check out my work<i className="icon-arrow-right3" /></a></p>
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
                                <div className="hero-img js-fullheight" style={{ backgroundImage: 'url(images/suit2.JPG)' }} />
                            </div>
                            <div className="col-one-forth js-fullheight">
                                <div className="display-t js-fullheight">
                                    <div className="display-tc js-fullheight">
                                        <div className="text-inner">
                                            <div className="desc">
                                                <h2>I'm a developer from the DFW area.</h2>
                                                <h5>(Willing to relocate)</h5>
                                                <p><a target="_blank" href="PaulJacobo.2020.May.Resume.A1.pdf" className="btn-view">View my resume<i className="icon-arrow-right3" /></a></p>
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