import styles from "./Logo.module.css";
export default function Logo() {
  return (
    <div className={styles.logo}>
      <img className="icon" src="./icon.png" />
      <p>WorldWise</p>
    </div>
  );
}
