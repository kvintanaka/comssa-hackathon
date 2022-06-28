import "bootstrap/dist/css/bootstrap.css";

import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.png";

export default function JoinDiscord() {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<div className="my-5">
				Get involved with ComSSA!{" "}
			</div>
			<button
				className="ms-3"
				style={{
					height: "50px",
					width: "50px",
					border: "transparent",
					borderRadius: "50px",
					backgroundColor: "#5865F2",
				}}
				onClick={() => {
					window.location.href = "https://discord.gg/SuwfFfjYJB";
				}}
			>
				<img src={discord} alt="..." height="30px" width="30px" />
			</button>
			<button
				className="ms-3"
				style={{
					height: "50px",
					width: "50px",
					border: "transparent",
					borderRadius: "50px",
					backgroundColor: "transparent",
				}}
				onClick={() => {
					window.location.href = "https://www.linkedin.com/company/computer-science-students-association/";
				}}
			>
				<img src={linkedin} alt="..." height="50px" width="50px" />
			</button>
			<button
				className="ms-3"
				style={{
					height: "50px",
					width: "50px",
					border: "transparent",
					borderRadius: "50px",
					backgroundColor: "transparent",
				}}
				onClick={() => {
					window.location.href = "https://www.facebook.com/ComSSACurtin/";
				}}
			>
				<img src={facebook} alt="..." height="50px" width="50px" />
			</button>
		</div>
	);
}
