import { faker } from "@faker-js/faker";
import {useState, memo} from "react"
import {useTest} from "./Context/TestContext"
const randomPost = () => {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
};
const List = memo(function List() {
  const {posts} = useTest()
    return (
        <>
        {posts.map(post => (
          <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))}
        
        </>
    )
})

export default List