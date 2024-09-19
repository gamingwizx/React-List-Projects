import styles from './AddPost.module.css'
import {useState} from "react"
import { usePost } from '../Context/PostContext'
export default function AddPost({addPost}) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    // const {addPost} = usePost()
    const handleAddPost = (e) => {
        e.preventDefault();
        const post = {
          title,
          body,
        };
        addPost(post);
      };
    return (
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
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <button className={`button ${styles.addFormButton}`}>Add post</button>
        </form>
      </section>
    )
}