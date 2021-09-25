import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
	render() {
		return (
			<div className="optin">
				<p>Register now to have a chance to win up to $1800 Cash</p>
				<button
					onClick={() =>
						(window.location.href = "https://comssaxiethackathon.getqpay.com")
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
