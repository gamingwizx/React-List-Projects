import {useEffect, useState} from "react"
import {registerUser} from "./UserSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../ui/Input.jsx"
import Button from "../../ui/Button.jsx"
export default function User() {
    const [fullName, setFullName] = useState("")
    const username = useSelector((store) => store.user.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleChange = (e) => {
    console.log(e.target.value) 
        setFullName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(fullName)
        dispatch(registerUser(fullName))
        navigate("/menu")
    }
    useEffect(() => {
        console.log("Hello")
    }, [fullName])
    if (username) {
        return (
            <form className="gap-10 flex flex-col items-center py-10">
                <div className="flex justify-center flex-col items-center gap-2">
                    <p className="text-gray-800 text-3xl">The best pizza.</p>
                    <Link to="/menu" className="text-yellow-500 self-center w-3/4 text-center tracking-wider text-4xl">Straight out of the oven, straight to you.</Link>
                </div>
                <Button type="primary" onClick={(e) =>{handleSubmit(e)}}>Continue Ordering, {username}</Button>
            </form>
        )
    }
     return <div className="flex justify-center py-10">
        <form className="flow-1 flex flex-col items-center w-5/6" onSubmit={(e) => handleSubmit(e)}>
            <div className="flex flex-col items-center text-center">
                <p className="text-gray-800 text-2xl  md:text-3xl">The best pizza.</p>
                <Link to="/menu" className="text-yellow-500 text-2xl md:text-3xl">Straight out of the oven, straight to you.</Link>
            </div>
            <p>Welcome! Please start by telling us your name:</p>
            <Input type="secondary" onChange={handleChange} placeholder="Your full Name"></Input>
            {fullName.length > 0 && <Button type="primary">Start ordering</Button>}
        </form>

    </div>
}