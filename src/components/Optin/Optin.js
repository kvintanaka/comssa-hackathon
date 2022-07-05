import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
	render() {
		return (
			<div className="optin">
				<p>Register now to get involved!</p>
				<button
					onClick={() =>
						(window.location.href = "https://curtinuniversity.wufoo.com/forms/curtin-singapore-hackathon-group-registration/")
					}
				>
					Group Registration
				</button>
				<p><br></br></p>
				<button
					onClick={() =>
						(window.location.href = "https://curtinuniversity.wufoo.com/forms/curtin-singapore-hackathon-individual-sign-up/")
					}
				>
					Solo Registration
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
