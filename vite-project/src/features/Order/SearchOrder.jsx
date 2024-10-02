import { useNavigate } from "react-router-dom"
import { useState } from "react"
export default function SearchOrder() {
    const [orderId, setOrderId] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/order/${orderId}`)
    }
    
    return (<form onSubmit={(e) => handleSubmit(e)}>
        <input placeholder="Search Order #" onChange={(e) => setOrderId(e.target.value)}></input>
        <button></button>
    </form>)
}

