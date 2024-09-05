import {NavLink} from "react-router-dom"
import styles from "./Header.module.css"

export default function Home() {
    return (
        <>
        <nav className={styles.nav}>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                    <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
            </ul>
        </nav>
        <p className="hello">Herllo</p>
        </>
    )
}