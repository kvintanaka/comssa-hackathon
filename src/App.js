import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import JoinDiscord from "./components/JoinDiscord";
import catchline from "./assets/mycological-mayhem.svg";
import title from "./assets/Landscape_Hackathon.svg";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<Preloader />
			<div className="container">
				<img
					src={title}
					height="180px"
					alt="..."
					style={{
						marginBottom: "-60px",
					}}
				/>
			</div>
			<div className="container">
				<img
					src={catchline}
					height="150px"
					alt="..."
					style={{
						marginBottom: "20px",
					}}
				/>
				<h2>
					<span className="hackathon">
						<strong>STARTING SOON</strong>
					</span>
					<br />
				</h2>
				<Timer />
				<Optin />
				<JoinDiscord />
				<h2>
					<span className="bottomtext">
						<strong>Contact us</strong> at facebook.com/ComSSACurtin for further questions
					</span>
				</h2>
			</div>
		</div>
	);
}

export default App;
