import Header from "../../ui/Header"
import {useState} from "react"
import {registerUser} from "../User/UserSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
export default function User() {
    const [fullName, setFullName] = useState("")
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(fullName))
    }
     return <>
        <Header/>
        <form onSubmit={(e) => handleSubmit(e)}>
            <p>The best pizza.</p>
            <Link to="/menu">Straight out of the oven, straight to you,</Link>
            <p>Welcome! Please start by telling us your name:</p>
            <input placeholder="Your full name" onChange={(e) => setFullName(e.target.value)}></input>
            <button>View Menu</button>
        </form>

    </>
}