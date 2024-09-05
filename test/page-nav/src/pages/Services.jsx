import Header from "../components/Header"
import styles from './Services.module.css'
import { Outlet } from "react-router-dom"
export default function Home() {
    return (
        <>
            <Header></Header>
            <p className={styles.description}>Services</p>
            <div className={styles.serviceContainer}>
                <Outlet></Outlet>
            </div>
            <button className="cta">Apply Now!</button>
        </>
    )
}