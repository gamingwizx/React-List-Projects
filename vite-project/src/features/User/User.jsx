import {useState} from "react"
import {registerUser} from "./UserSlice"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../ui/Input.jsx"
export default function User() {
    const [fullName, setFullName] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(fullName))
        navigate("/menu")
    }
     return <div className="flex justify-center py-10">
        <form className="flow" onSubmit={(e) => handleSubmit(e)}>
            <p className="text-gray-800 text-3xl">The best pizza.</p>
            <Link to="/menu" className="text-yellow-500 text-3xl">Straight out of the oven, straight to you,</Link>
            <p>Welcome! Please start by telling us your name:</p>
            <Input type="secondary" onChange={(e) => setFullName(e.target.value)} placeholder="Your full Name"></Input>
        </form>

    </div>
}