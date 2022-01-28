import styles from "@component-style/Box.module.sass"

type Props = {
    children: React.ReactNode | React.ReactNode[]
}

export default function Box({ children }: Props) {
    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}
