import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export default function CartLayout() {
    const cart = useSelector((store) => store.cart.cart)
    const totalPrice = cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.unitPrice * cartItem.quantity, 0)
    const navigate = useNavigate()
    const handleOpenCart = () => {
        navigate("/cart")
    }   
    return (
        <div className="flex justify-between bg-gray-800">
            <div className="flex items-center gap-x-5 font-semibold p-2">
            <p className="uppercase text-white">{cart.length} Pizzas</p>
            <p className="uppercase text-white">${totalPrice}</p>
            </div>
            <button onClick={() => handleOpenCart()} className="uppercase bg-transparent text-white">Open Cart</button>
        </div>
    )
}