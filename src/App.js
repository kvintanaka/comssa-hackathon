import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import Logo from "./components/Logo";
import JoinDiscord from "./components/JoinDiscord";
import catchline from "./assets/first-contact.png";

import "./styles.css";

function App() {
	return (
		<div className="App">
			<Preloader />
			<div className="container">
				<img
					src={catchline}
					height="70px"
					style={{
						marginBottom: "20px",
					}}
				/>
				<h2>
					<span className="hackathon">
						<strong>Hackathon</strong>
					</span>
					<br />
					<span>Starting Soon</span>
				</h2>
				<Timer />
				<Optin />
				<JoinDiscord />
			</div>
		</div>
	);
}

export default App;
