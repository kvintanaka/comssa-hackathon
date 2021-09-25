import "bootstrap/dist/css/bootstrap.css";

import discord from "../assets/discord.svg";

export default function JoinDiscord() {
	return (
		<div className="d-flex align-items-center justify-content-center">
			<div className="my-5">
				For further information and F.A.Q., join Hackathon Discord{" "}
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
					window.location.href = "https://discord.gg/eQbZXJp93s";
				}}
			>
				<img src={discord} alt="..." height="30px" width="30px" />
			</button>
		</div>
	);
}
