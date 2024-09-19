import {usePost} from "../Context/PostContext"
import styles from './PostList.module.css'
export default function PostList({searchPosts}) {
    // const {posts} = usePost()
    return (
        <section className={styles.list}>
        {searchPosts &&
          searchPosts.map((post) => (
            <div className={styles.item}>
              <p className={styles.title}>{post.title}</p>
              <p>{post.body}</p>
            </div>
          ))}
      </section>
    )
}