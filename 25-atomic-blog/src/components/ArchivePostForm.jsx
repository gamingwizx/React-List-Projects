import styles from './ArchivePostForm.module.css'
import { usePost } from '../Context/PostContext';
import { useState, memo} from 'react';
import ArchiveItemList from './ArchiveItemList';
import {faker} from "@faker-js/faker"
const randomPost = () => {
  return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase()
  }
}
const ArchivePostForm = memo(function ArchivePostForm({archiveOptions, onShowArchivePost}) {
  const [archivedPosts, setArchivedPosts] = useState(() => 
    Array.from({length: 10000}, () => {
    return randomPost()
  }))
    console.log(archiveOptions)
      
    
    return (
        <section className={`${styles.showArchivePosts} flow`}>
        <h2 className={styles.archiveTitle}>POST ARCHIVE</h2>
        <button className="button" onClick={() => onShowArchivePost()}>
          Show Archive Posts
        </button>
        {archiveOptions.showArchivePosts && (
          <ArchiveItemList archiveOptions={archiveOptions} archivedPosts={archivedPosts}/>
        )}
      </section>
    )
})

export default ArchivePostForm