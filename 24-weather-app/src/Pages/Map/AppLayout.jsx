import Map from "./Map";
import User from "./User";
import Sidebar from "./Sidebar";

import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar></Sidebar>
      <Map />
    </div>
  );
}

export default AppLayout;
