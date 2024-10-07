import { useSelector, useDispatch } from "react-redux"
import { increaseAmount, addItem, removeItem, decreaseAmount } from "../Cart/CartSlice"
import { useState, useEffect } from "react"
import Button from "../../ui/Button"
export default function MenuItem(pizza) {
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const cart = useSelector((store) => store.cart.cart)
    const dispatch = useDispatch()
    const {name, unitPrice, ingredients, imageUrl, id} = pizza.pizza
    const handleAddToCart = () => {
        dispatch(addItem(pizza))
    }
    const handleDeleteFromCart = () => {
        dispatch(removeItem(pizza))
    }
    const handleIncreaseAmount = () => {
        dispatch(increaseAmount(pizza))
    }
    const handleDecreaseAmount = () => {
        dispatch(decreaseAmount(pizza))
    }
    useEffect(() => {
        setIsAddedToCart(() => cart.map((cartItem) => cartItem.pizza?.id)?.includes(id))
        setQuantity(() => cart.find(cartItem => cartItem.pizza.id === id)?.quantity)
        
    }, [cart]);
    return (
        <div className="flow-left w-3/4 flex p-3 border-gray-400 border-b justify-between">
            <div className="flex gap-4">
                <img className="h-24" src={imageUrl}></img>
                <div className="self-stretch justify-between flex flex-col items-start">
                    <div className="flex flex-col items-start capitalize">
                    <p className="font-bold text-xl">{name}</p>
                        {ingredients.join(", ")}
                    </div>
                    <p className="text-2xl">€{unitPrice.toFixed(2)}</p>
                </div>
            </div>
            {!isAddedToCart && <Button type="primary" onClick={() => handleAddToCart()}>Add To Cart</Button>}
            {isAddedToCart && 
            <div className="self-end flex gap-3 flex items-center">
                <Button type="small" onClick={() => handleDecreaseAmount()}>-</Button>
                <span>{quantity}</span>
                <Button type="small" onClick={() => handleIncreaseAmount()}>+</Button>
                <button onClick={() => handleDeleteFromCart()} className="rounded-3xl uppercase bg-yellow-500 text-xs self-end">Delete</button>
            </div>}
        </div>
    )
}