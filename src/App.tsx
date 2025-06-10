import { useState } from "react";
import { Howl } from "howler";
import Scene from "./components/Scene/Scene";
import StartScreen from "./components/UI/StartScreen";
// import { Snowfall } from "react-snowfall";

export default function App() {
	const [gameStarted, setGameStarted] = useState(false);
	// const [showSnow, setShowSnow] = useState(false);

	const startGame = () => {
		// Son de crash de voiture
		const sound = new Howl({
			src: ["/sounds/car-crash.mp3"],
			volume: 0.5,
			onend: () => {
				// setShowSnow(true);
			},
		});
		sound.play();
		setGameStarted(true);
	};

	return (
		<div
			style={{
				backgroundColor: gameStarted ? "#000" : "#000",
				height: "100vh",
				width: "100vw",
				overflow: "hidden",
				position: "relative",
			}}
		>
			{!gameStarted ? (
				<StartScreen onStart={startGame} />
			) : (
				<>
					<Scene />
					{/* {showSnow && (
						<Snowfall
							snowflakeCount={200}
							style={{ position: "fixed", top: 0, left: 0 }}
						/>
					)} */}
				</>
			)}
		</div>
	);
}
