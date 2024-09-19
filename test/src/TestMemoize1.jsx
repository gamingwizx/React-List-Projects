import { memo } from "react"
import {useTest} from "./Context/TestContext"
const TestMemoize1 = memo(function TestMemoize() {
    const {cartItems, posts, addCartItem} = useTest()
    return (
        <>
        <button onClick={() => addCartItem()}>Add Cart Item</button>
        <p>{cartItems}</p>
        {posts.map(post => (
          <p>TestMemoize1</p>  
        ))}
        </>
    )
})
export default TestMemoize1