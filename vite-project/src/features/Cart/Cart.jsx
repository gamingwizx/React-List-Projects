import CartItem from "./CartItem.jsx"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import Button from "../../ui/Button.jsx"
import { useNavigate, useFetcher} from "react-router-dom"
import { useDispatch } from "react-redux"
import {clearCart} from "../Cart/CartSlice.jsx"

export default function Cart() {
    const cart = useSelector((store) => store.cart.cart)
    const cartPrice = cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.unitPrice, 0)
    console.log(cartPrice)
    const username = useSelector((store) => store.user.username)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const fetcher = useFetcher()
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
    console.log(fetcher.data)
    return (
        <div className="h-full flex flex-col items-between">
        <Link className="py-5" to="/menu">Back to Menu</Link>
        <div className="flow">
            <span className="text-3xl">Your cart, {username}</span>
            {cart.map(cartItem => (
                
                <div key={cartItem.key}>
                    {/* <p>{JSON.stringify(cartItem.quantity)}</p> */}
                    <CartItem cartItem={cartItem} />
                </div>
            ))}
            <div className="flow-left">
                <Button type="primary" onClick={() => handleOnOrder()}>Order ${cartPrice}</Button>
                <Button type="secondary" onClick={() => handleClearCart()}>Clear Cart</Button>
            </div>
        </div>
        </div>
    )

    
}

