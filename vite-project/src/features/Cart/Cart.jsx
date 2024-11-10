import CartItem from "./CartItem.jsx"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Button from "../../ui/Button.jsx"
import { useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux"
import {clearCart} from "../Cart/CartSlice.jsx"

export default function Cart() {
    const cart = useSelector((store) => store.cart.cart)
    const cartPrice = cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.unitPrice, 0)
    const username = useSelector((store) => store.user.username)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleOnOrder = () => {
        navigate("/order/create")
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    // useEffect(() => {
    //     console.log(fetcher.data)
    //     if (!fetcher.data && fetcher.state === "idle") {

    //         fetcher.load("/menu")
    //         console.log("Test")
    //     }
    //     console.log("Test1")
    // }, [fetcher])
    if (cart.length <= 0) {
        return (
            <div className="h-full flex flex-col items-between px-6 ">
                <Link className="py-5" to="/menu">&larr; Back to Menu</Link>
                <p className="font-bold tracking-wider">Your cart is empty, go back and order some pizza!</p>
        </div>
        )
    }
    return (
        <div className="h-full flex flex-col items-between px-6 ">
        <Link className="py-5" to="/menu">&larr; Back to Menu</Link>
        <div className="flow">
            <span className="md:text-3xl text-xl">Your cart, {username}</span>
            {cart.map(cartItem => (
                
                <div key={cartItem.key}>
                    {/* <p>{JSON.stringify(cartItem.quantity)}</p> */}
                    <CartItem cartItem={cartItem} />
                </div>
            ))}
            <div className="flex gap-4">
                <Button type="primary" onClick={() => handleOnOrder()}>Order ${cartPrice}</Button>
                <Button type="secondary" onClick={() => handleClearCart()}>Clear Cart</Button>
            </div>
        </div>
        </div>
    )

    
}

