import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Input from "../../ui/Input"
export default function SearchOrder() {
    const [orderId, setOrderId] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/order/${orderId}`)
    }
    
    return (<form onSubmit={(e) => handleSubmit(e)}>
        <Input placeholder="Search order #" onChange={(e) => setOrderId(e.target.value)} type="primary"></Input>
    </form>)
}

