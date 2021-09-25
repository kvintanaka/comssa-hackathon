import "bootstrap/dist/css/bootstrap.css";

import comssa from "../assets/comssa.png";
import iet from "../assets/iet.jpg";
import x from "../assets/X.svg";
import vgw from "../assets/vgw.png";
import imc from "../assets/imc.png";
import accenture from "../assets/accenture.png";
import atlassian from "../assets/atlassian.png";

export default function Logo() {
	const sponsors = [accenture, atlassian, vgw, imc];
	return (
		<div className="my-5">
			<div className="d-flex align-items-center justify-content-center m-4">
				<img
					className="me-3"
					style={{
						height: "70px",
						width: "70px",
						borderRadius: "5px",
						filter: "drop-shadow(0px 0px 5px rgba(255,255,255, 0.5))",
					}}
					src={comssa}
					alt="..."
				/>
				<img
					style={{
						height: "40px",
						width: "40px",
						borderRadius: "5px",
						filter: "invert(100%)",
					}}
					src={x}
					alt="..."
				/>
				<img
					className="ms-3"
					style={{
						height: "70px",
						width: "70px",
						borderRadius: "5px",
						filter: "drop-shadow(0px 0px 5px rgba(255,255,255, 0.5))",
					}}
					src={iet}
					alt="..."
				/>
			</div>
			<div className="my-2">
				<small>Sponsored by</small>
			</div>
			<div className="d-flex align-items-center justify-content-center ">
				{sponsors.map((sponsor) => {
					return (
						<img
							className="mx-2"
							style={{
								height: "20px",
								borderRadius: "5px",
								filter: "drop-shadow(0px 0px 1px rgba(255,255,255, 1))",
							}}
							src={sponsor}
							alt="..."
						/>
					);
				})}
			</div>
		</div>
	);
}
