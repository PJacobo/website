import React, { Component } from 'react'

export default class Case extends Component {
	render() {
		return (
			<div className="colorlib-case colorlib-bg-white">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Projects</span>
							<h2>Showcase: Senior Design Project</h2>
						</div>
					</div>
					<div className="work-wrap">
						<div className="row animate-box">
							<div className="owl-carousel1">
								<div className="item">
									<div className="col-md-6">
										<div className="case-img" style={{ backgroundImage: 'url(/searchdemo.gif)' }} />
									</div>
									<div className="col-md-6">
										<div className="case-desc">
											<p className="tag"><span>Front-end</span></p>
											<h3><a href="#">Indexed Resume Search </a></h3>
											<p>Performs searches with multiople queries including location and education.</p>
											<p><a href="#" className="btn btn-primary">See details</a></p>
										</div>
									</div>
								</div>
								
								<div className="item">
									<div className="col-md-6">
										<div className="case-img" style={{ backgroundImage: 'url(resultsdemo.gif)' }} />
									</div>
									<div className="col-md-6">
										<div className="case-desc">
											<p className="tag"><span>Search Function</span></p>
											<h3><a href="#">Indexed Resume Search </a></h3>
											<p>Links to LinkedIn or Google search</p>
											<p><a href="#" className="btn btn-primary">See details</a></p>
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