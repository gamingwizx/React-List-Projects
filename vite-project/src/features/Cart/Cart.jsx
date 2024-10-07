import CartItem from "./CartItem.jsx"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Button from "../../ui/Button.jsx"
export default function Cart() {
    const cart = useSelector((store) => store.cart.cart)
    const username = useSelector((store) => store.user.username)
    return (
        <div className="h-full flex flex-col items-between">
        <Link className="py-5" to="/menu">Back to Menu</Link>
        <div className="flow">
            <span className="text-3xl">Your cart, {username}</span>
            {cart.map(cartItem => (
                
                <div key={cartItem.pizza.key}>
                    {/* <p>{JSON.stringify(cartItem.quantity)}</p> */}
                    <CartItem cartItem={cartItem} />
                </div>
            ))}
            <div className="flow-left">
                <Button type="primary">Clear Cart</Button>
                <Button type="secondary">Clear Cart</Button>
            </div>
        </div>
        </div>
    )

    
}

