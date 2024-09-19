import { useSelector, useDispatch } from "react-redux"
import {useState} from "react"
import {register} from "../store/Customer/CustomerSlice"
export default function Customer() {
    const [fullName, setFullName] = useState("")
    const [nationalId, setNationalId] = useState("")
    const dispatch = useDispatch()
    const handleRegister = (e) => {
        e.preventDefault()
        const newCustomer = {
            fullName,
            nationalId,
            isPopulated: true
        }
        dispatch(register(newCustomer))
    }
    return (
        <>
        <h2>Create new customer</h2>
        <form onSubmit={(e) => handleRegister(e)} className="flow form">
            <div className="input">
                <span>Customer full name</span>
                <input onChange={(e) => setFullName(e.target.value)}></input>
            </div>
            <div className="input">
                <span>National ID</span>
                <input onChange={(e) => setNationalId(e.target.value)}></input>
            </div>
            <button>Create New Customer</button>
        </form>
        </>)
}