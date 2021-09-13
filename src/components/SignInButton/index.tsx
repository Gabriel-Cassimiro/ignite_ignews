import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"

import styles from "./style.module.scss"

export function SignInButon() {
	const isUserLoggedIn = true

	return isUserLoggedIn ? (
		<button type="button" className={styles.signInButton}>
			<FaGithub color="#04b361" />
			GABRIEL GUEDES
			<FiX color="#737388" className={styles.closeIcon} />
		</button>
	) : (
		<button type="button" className={styles.signInButton}>
			<FaGithub color="#eba417" />
			sign in button
		</button>
	)
}
