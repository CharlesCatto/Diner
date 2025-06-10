import styles from "./Scene.module.css";
import Character from "../Character/Character";

export default function Scene() {
	return (
		<div className={styles.sceneContainer}>
			{/* Voiture en feu à gauche */}
			<div className={styles.car} />

			{/* Diner à droite */}
			<div className={styles.diner}>
				<span className={styles.neon}>D</span>
				<span className={styles.neon}>I</span>
				<span className={`${styles.neon} ${styles.flickering}`}>N</span>
				<span className={`${styles.neon} ${styles.flickering}`}>E</span>
				<span className={styles.neon}>R</span>
			</div>

			{/* Personnage positionné en bas à gauche */}
			<Character initialPosition={{ x: 50, y: 50 }} />
		</div>
	);
}
