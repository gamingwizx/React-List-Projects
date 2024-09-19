import logo from "./logo.svg";
import "./App.css";
import styles from "./App.module.css";
import { useState, useEffect, useMemo } from "react";
import { usePost } from "./Context/PostContext";
import { faker } from "@faker-js/faker";
import Header from "./components/Header";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import ArchivePostForm from "./components/ArchivePostForm";
const randomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};
function App() {
  const { posts } = usePost();
  const [searchPost, setSearchPost] = useState("");
  const [darkLightMode, setDarkLightMode] = useState(false);
  const [archivedPosts, setArchivedPosts] = useState(() =>
    Array.from({ length: 10000 }, () => {
      return randomPost();
    })
  );
  const [showArchivePosts, setShowArchivePosts] = useState(false);
  // const posts = useState(() =>
  //   Array.from({ length: 50 }, () => {
  //     return randomPost();
  //   })
  // );
  const searchPosts = posts.filter((post) =>
    `${post.title} ${post.body}`.toLowerCase().includes(searchPost)
  );
  const handleClearPost = () => {};
  const archiveOptions = useMemo(() => {
    return {
      text: `Number of archive posts plus ${posts.length}`,
      showArchivePosts,
    };
  });
  const handleAddPost = (post) => {
    searchPosts.push(post);
  };
  const handleShowArchivePost = () => {
    setShowArchivePosts(!showArchivePosts);
  };
  useEffect(() => {
    document.documentElement.classList.toggle("fake-dark-mode");
  }, [darkLightMode]);

  return (
    <div className="App flow">
      <button
        onClick={() => setDarkLightMode(!darkLightMode)}
        className={styles.darkLightMode}
      >
        {darkLightMode ? "☀️" : "🌙"}
      </button>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} />
          <h1>The Atomic Blog</h1>
        </div>
        <div className={styles.headerResult}>
          <span className={styles.counter}>
            🚀 {searchPosts.length} atomic posts found
          </span>
          <input
            className="input"
            placeholder="Search posts"
            onChange={(e) => setSearchPost(e.target.value)}
          ></input>
          <button className="button" onClick={() => handleClearPost()}>
            Clear posts
          </button>
        </div>
      </header>
      <AddPost addPost={handleAddPost} />
      <PostList searchPosts={searchPosts} />
      <ArchivePostForm
        onShowArchivePost={handleShowArchivePost}
        archiveOptions={archiveOptions}
      />
      <section className={styles.footer}>
        <p>© by The Atomic Blog ✌️</p>
      </section>
    </div>
  );
}

export default App;
