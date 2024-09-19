import styles from './Header.module.css'
import {usePost} from "../Context/PostContext"

export default function Header() {
    const {posts, searchPost, clearPost} = usePost()
    const handleClearPost = (e) => {
        clearPost();
      };
    return (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} />
          <h1>The Atomic Blog</h1>
        </div>
        <div className={styles.headerResult}>
          <span className={styles.counter}>
            🚀 {posts.length} atomic posts found
          </span>
          <input
            className="input"
            placeholder="Search posts"
            onChange={(e) => searchPost(e.target.value)}
          ></input>
          <button className="button" onClick={() => handleClearPost()}>
            Clear posts
          </button>
        </div>
      </header>)
}