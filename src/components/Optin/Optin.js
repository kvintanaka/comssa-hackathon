import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
	render() {
		return (
			<div className="optin">
				<p>Register now to get involved!</p>
				<button
					onClick={() =>
						(window.location.href = "https://www.youtube.com/watch?v=6n3pFFPSlW4")
					}
				>
					Register Now
				</button>
				<div id="modal">
					<div className="wrapper">
						<h3>Re</h3>
						<div className="clearfix">
							<div className="col-8" />
							<div className="col-3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Optin;
