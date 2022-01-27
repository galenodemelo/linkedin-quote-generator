import styles from "@component-style/Logo.module.sass"

export default function Logo() {
    return (
        <header className={styles.logo}>
            <h1 className={styles.title}>
                Linkedin <br />
                Quote  <br />
                Generator
            </h1>
            <p className={styles.tagline}>
                Infamous tool to become <br />
                famous on LinkedIn.
            </p>
        </header>
    )
}
