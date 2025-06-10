import { useEffect, useRef, useState } from "react";
import styles from "./Character.module.css";
import walkingSprite from "../../assets/sprites/character/Walking.png";

interface CharacterProps {
	initialPosition?: { x: number; y: number };
}

export default function Character({
	initialPosition = { x: 50, y: 50 },
}: CharacterProps) {
	const [position, setPosition] = useState(initialPosition);
	const [direction, setDirection] = useState<"right" | "left">("right");
	const [isWalking, setIsWalking] = useState(false);
	const characterRef = useRef<HTMLDivElement>(null);

	// Gestion des touches clavier
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "ArrowRight") {
				setDirection("right");
				setIsWalking(true);
				setPosition((prev) => ({ ...prev, x: prev.x + 5 }));
			} else if (e.key === "ArrowLeft") {
				setDirection("left");
				setIsWalking(true);
				setPosition((prev) => ({ ...prev, x: prev.x - 5 }));
			}
			setPosition((prev) => {
				const newX = e.key === "ArrowRight" ? prev.x + 5 : prev.x - 5;
				return {
					...prev,
					x: Math.max(0, Math.min(window.innerWidth - 128, newX)),
				};
			});
		};

		const handleKeyUp = (e: KeyboardEvent) => {
			if (["ArrowRight", "ArrowLeft"].includes(e.key)) {
				setIsWalking(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		window.addEventListener("keyup", handleKeyUp);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			window.removeEventListener("keyup", handleKeyUp);
		};
	}, []);
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!characterRef.current) return;

			const rect = characterRef.current.getBoundingClientRect();
			const characterCenterX = rect.left + rect.width / 2;
			setDirection(e.clientX > characterCenterX ? "right" : "left");
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	return (
		<div
			ref={characterRef}
			className={styles.characterContainer}
			style={{
				left: `${position.x}px`,
				bottom: `${position.y}px`,
				zIndex: 1000,
				transform: `scaleX(${direction === "right" ? 1 : -1})`,
			}}
		>
			<div
				className={`${styles.spriteSheet} ${isWalking ? styles.walking : ""}`}
			>
				<img
					src={walkingSprite}
					alt="Character"
					className={styles.characterSprite}
				/>
			</div>
		</div>
	);
}
