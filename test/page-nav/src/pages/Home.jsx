import Header from "../components/Header"
import styles from "./Home.module.css"
export default function Home() {
    return (
        <>
            <Header></Header>
            <p className={styles.description}>Home</p>
            <button className="cta">Apply now!</button>
        </>
    )
}