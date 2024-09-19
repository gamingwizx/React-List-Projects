import styles from './ArchiveItem.module.css'
import { memo } from 'react';
import { usePost } from '../Context/PostContext';
export default function ArchiveItem({post}) {
    // const {addPost, removeArchivePost} = usePost()
    const handleAddArchivePost = (archivePost) => {
        // addPost(archivePost);
        // removeArchivePost(archivePost);
      };
    return (
        <div className={styles.archivedPost}>
                  <span className={styles.archivedPostTitle}>{post.title}</span>
                  <span className={styles.archivedPostBody}>{post.body}</span>
                  <button
                    onClick={() => handleAddArchivePost(post)}
                    className={`${styles.archivedPostButton} button`}
                  >
                    Add as New Post
                  </button>
                </div>
    )
}