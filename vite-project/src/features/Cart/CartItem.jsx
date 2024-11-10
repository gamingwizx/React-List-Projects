import Button from "../../ui/Button"
import { deleteCart } from "./CartSlice"
import { useDispatch } from "react-redux"
export default function CartItem(cartItem) {
    const {name, unitPrice, pizzaId} = cartItem.cartItem 
    const quantity = cartItem.cartItem.quantity
    const dispatch = useDispatch()
    const handleDeleteCartItem = () => {
        dispatch(deleteCart(pizzaId))
    }
    return (
        <div className="md:text-xl text-sm flex justify-between">
            <div className="flex items-center">
                <span>{quantity}x&nbsp;&nbsp;</span>
                <span>{name}</span>
            </div>
            <div className="flow-left">
                <span className="font-bold">€{(unitPrice * quantity).toFixed(2)}</span>
                <Button type="primary" onClick={() => handleDeleteCartItem(pizzaId)}>Delete</Button>
            </div>
        </div>
    )
}