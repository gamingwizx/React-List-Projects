import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import { useState } from "react";
import { usePost } from "./Context/PostContext";
function App() {
  const { posts, addPost, clearPost, searchPost } = usePost();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddPost = (e) => {
    e.preventDefault();
    const post = {
      title,
      description,
    };
    addPost(post);
  };

  const handleClearPost = (e) => {
    clearPost();
  };

  return (
    <div className="App flow">
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
      </header>
      <section className={styles.addSection}>
        <form className={styles.addForm} onSubmit={(e) => handleAddPost(e)}>
          <input
            className={`input ${styles.addFormTitle}`}
            placeholder="Post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <textarea
            className={`input ${styles.postBody}`}
            placeholder="Post body"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className={`button ${styles.addFormButton}`}>Add post</button>
        </form>
      </section>
      <section className={styles.list}>
        {posts &&
          posts.map((post) => (
            <div className={styles.item}>
              <p className={styles.title}>{post.title}</p>
              <p>{post.description}</p>
            </div>
          ))}
      </section>
    </div>
  );
}

export default App;
