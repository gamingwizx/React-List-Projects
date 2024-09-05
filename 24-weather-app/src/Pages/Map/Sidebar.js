import { NavLink, Outlet } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Logo from "../Logo.js";
import AppNav from "./AppNav";
export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
}
