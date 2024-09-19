import { memo } from "react"
import {useTest} from "./Context/TestContext"
const TestMemoize = memo(function TestMemoize() {
    return (
        <>
        <p>Hello</p>
        </>
    )
})
export default TestMemoize