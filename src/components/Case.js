import React, { Component } from 'react'

export default class Case extends Component {
	render() {
		return (
			<div className="colorlib-case colorlib-bg-white">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
							<span>Work</span>
							<h2>Happy spending my time to this projects</h2>
						</div>
					</div>
					<div className="work-wrap">
						<div className="row animate-box">
							<div className="owl-carousel1">
								<div className="item">
									<div className="col-md-6">
										<div className="case-img" style={{ backgroundImage: 'url(images/work-1.jpg)' }} />
									</div>
									<div className="col-md-6">
										<div className="case-desc">
											<p className="tag"><span>UI/UX, Art Direction</span></p>
											<h3><a href="#">Playtime Website Manager</a></h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small</p>
											<p><a href="#" className="btn btn-primary">See details</a></p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-md-6">
										<div className="case-img" style={{ backgroundImage: 'url(images/work-2.jpg)' }} />
									</div>
									<div className="col-md-6">
										<div className="case-desc">
											<p className="tag"><span>UI/UX, Art Direction</span></p>
											<h3><a href="#">Race Mobile Application</a></h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small</p>
											<p><a href="#" className="btn btn-primary">See details</a></p>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="col-md-6">
										<div className="case-img" style={{ backgroundImage: 'url(images/work-3.jpg)' }} />
									</div>
									<div className="col-md-6">
										<div className="case-desc">
											<p className="tag"><span>UI/UX, Art Direction</span></p>
											<h3><a href="#">Playtime Website Manager</a></h3>
											<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small</p>
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