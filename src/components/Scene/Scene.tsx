import { useEffect, useRef } from "react";
import Character from "../Character/Character";
import styles from "./Scene.module.css";

export default function Scene() {
	const canvasRef = useRef<HTMLDivElement>(null);

	// Effets pour la scène (fumée, néons, etc.)
	useEffect(() => {
		// Ici vous pourriez ajouter des animations ou effets
	}, []);

	return (
		<div ref={canvasRef} className={styles.sceneContainer}>
			{/* Voiture en feu à gauche */}
			<div className={styles.car} />

			{/* Diner à droite */}
			<div className={styles.diner}>
				<span className={styles.neon}>D</span>
				<span className={styles.neon}>I</span>
				<span className={`${styles.neon} ${styles.flickering}`}>N</span>
				<span className={styles.neon}>E</span>
				<span className={`${styles.neon} ${styles.flickering}`}>R</span>
			</div>

			{/* Personnage */}
			<Character />
		</div>
	);
}
