import { useEffect, useRef, useState } from "react";
import styles from "./Character.module.css";

export default function Character() {
	const [position, setPosition] = useState({ x: 100, y: 300 });
	const [direction, setDirection] = useState<"right" | "left">("right");
	const characterRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") {
				setDirection("right");
				setPosition((prev) => ({ ...prev, x: prev.x + 10 }));
			} else if (e.key === "ArrowLeft") {
				setDirection("left");
				setPosition((prev) => ({ ...prev, x: prev.x - 10 }));
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	return (
		<div
			ref={characterRef}
			className={`${styles.character} ${direction === "right" ? styles.faceRight : styles.faceLeft}`}
			style={
				{
					left: `${position.x}px`,
					bottom: `${position.y}px`,
					"--pixel-size": 3, // Vous pouvez ajuster cette valeur
				} as React.CSSProperties
			}
		>
			<img
				className={`${styles.characterSprite} ${styles.pixelart}`}
				src="/sprites/character-walk.png"
				alt="Character"
			/>
		</div>
	);
}
