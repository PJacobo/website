import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="colorlib-footer">
  <div className="container">
    <div className="row row-padded-bottom">
      <div className="col-md-6">
        <h3>Lets Talk</h3>
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text</p>
        <p className="btn-footer"><a href="#">Tell us about your project</a></p>
      </div>
      <div className="col-md-6 info">
        <h3>Info</h3>
        <p>Email: <strong><a href="#">mail@pdjonline.xyz</a></strong></p>
        <p>Phone: <strong><a href="#">(817) 901-7174</a></strong></p>
        <p>Location: <strong>Dallas, Texas</strong></p>
        <p className="colorlib-social-icons">
          <span><a target="_blank" href="https://www.linkedin.com/in/pauljacobo3725/"><i className="icon-social-linkedin" /></a></span>
          <span><a target="_blank" href="https://github.com/PJacobo"><i className="icon-social-github" /></a></span>
        </p>
      </div>
    </div>
  </div>
  
</footer>


        )
    }
}