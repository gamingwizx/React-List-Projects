import styles from './ArchiveItemList.module.css'
import { usePost } from '../Context/PostContext'
import React, { useState,memo } from 'react';
import ArchiveItem from './ArchiveItem';
import {faker} from "@faker-js/faker"
const randomPost = () => {
  return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase()
  }
}
const ArchiveItemList = memo(function ArchiveItemList({archiveOptions, archivedPosts}){
  const [title, setTitle] = useState(archiveOptions.title)
    // const {archivedPosts, addPost, removeArchivePost} = usePost()
    
    // const handleAddArchivePost = (archivePost) => {
    //     addPost(archivePost);
    //     removeArchivePost(archivePost);
    //   };
    return (
        <div className={styles.archivedPosts}>
          
            {archivedPosts &&
              archivedPosts.map((post) => (
                <ArchiveItem post={post}/>
              ))}
          </div>
    )
})

export default ArchiveItemList
