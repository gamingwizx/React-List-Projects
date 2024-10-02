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
        <form className="flow" onSubmit={(e) => handleSubmit(e)}>
            <p className="text-gray-800 text-3xl">The best pizza.</p>
            <Link to="/menu" className="text-yellow-500 text-3xl">Straight out of the oven, straight to you,</Link>
            <p>Welcome! Please start by telling us your name:</p>
            <input placeholder="Your full name" className="input" onChange={(e) => setFullName(e.target.value)}></input>
        </form>

    </>
}