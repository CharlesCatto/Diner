import type { CSSProperties } from "react";

interface StartScreenProps {
	onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
	const buttonStyle: CSSProperties = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "15px 30px",
		fontSize: "24px",
		backgroundColor: "#ff0000",
		color: "#fff",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
		fontFamily: '"Press Start 2P", cursive',
	};

	return (
		<button type="button" style={buttonStyle} onClick={onStart}>
			START
		</button>
	);
}
