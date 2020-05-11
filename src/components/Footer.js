import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="colorlib-footer">
  <div className="container">
    <div className="row row-padded-bottom">
      <div className="col-md-6">
        <h3>Interested?</h3>
        <p className="btn-footer"><a href="mailto:mail@pdjonline.xyz">Tell me about your project</a></p>
      </div>
      <div className="col-md-6 info">
        <h3>Info</h3>
        <p>Email: <a href="mailto:mail@pdjonline.xyz"><strong>mail@pdjonline.xyz</strong></a></p>

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