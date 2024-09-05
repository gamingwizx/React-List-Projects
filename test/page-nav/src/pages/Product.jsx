import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import styles from "./Product.module.css"
export default function Product() {
    return (
        <>
            <Header></Header>
            <p className={styles.description}>Product</p>
            <div className={styles.productContainer}>
                <Outlet></Outlet>
            </div>
            <button className="cta">Apply Now!</button>
        </>
    )
}