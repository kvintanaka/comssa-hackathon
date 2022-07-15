import React, { Component } from "react";
import "./Optin.css";

class Optin extends Component {
	render() {
		return (
			<div className="optin">
				<p>Register now to get involved!</p>
				<button
					onClick={() =>
						(window.location.href = "https://curtinuniversity.wufoo.com/forms/s1wkppll0a05kvr/")
					}
				>
					Group Registration
				</button>

				<button
					onClick={() =>
						(window.location.href = "https://curtinuniversity.wufoo.com/forms/sua1aoh0uhi2p1/")
					}
				>
					Individual Registration
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
