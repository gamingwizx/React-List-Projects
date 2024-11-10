/* eslint-disable */
import { useSelector, useDispatch } from "react-redux"
import { increaseAmount, addItem, removeItem, decreaseAmount } from "../Cart/CartSlice"
import { useState, useEffect } from "react"
import Button from "../../ui/Button"
export default function MenuItem(pizza) {
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const cart = useSelector((store) => store.cart.cart)
    const dispatch = useDispatch()
    const {name, unitPrice, ingredients, imageUrl, id, soldOut} = pizza.pizza
    const handleAddToCart = () => {
        const newPizza = {
            pizzaId: id,
            imageUrl,
            ingredients,
            name,
            quantity,
            soldOut,
            unitPrice
        }
        dispatch(addItem(newPizza))
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
        setIsAddedToCart(() => cart.map((cartItem) => cartItem?.pizzaId)?.includes(id))
        setQuantity(() => cart.find(cartItem => cartItem.pizzaId === id)?.quantity)
        
    }, [cart]);

    if (isAddedToCart) {
        return (
            <div className="flow-left w-full flex p-3 border-gray-400 border-b">
            <img className="h-24" src={imageUrl}></img>
            <div className="flex gap-1 w-full justify-between flex-col">
                <p className="font-bold font">{name}</p>
                <p className="font-1 capitalize">{ingredients.join(", ")}</p>
                <div className="flex items-center justify-between">
                    <p className="font">€{unitPrice.toFixed(2)}</p>
                    <div className="self-end flex gap-3 flex items-center">
                    <Button type="small" onClick={() => handleDecreaseAmount()}>-</Button>
                    <span>{quantity}</span>
                    <Button type="small" onClick={() => handleIncreaseAmount()}>+</Button>
                    <button onClick={() => handleDeleteFromCart()} className="rounded-3xl uppercase bg-yellow-500 text-xs self-end">Delete</button>
                </div>
                </div>
            </div>
        </div>
        )

    }

    return (
        <div className="flow-left w-full flex p-3 border-gray-400 border-b">
            <img className="h-24" src={imageUrl}></img>
            <div className="flex gap-1 w-full justify-between flex-col">
                <p className="font-bold font">{name}</p>
                <p className="font-1 capitalize">{ingredients.join(", ")}</p>
                <div className="flex items-center justify-between">
                    <p className="font">€{unitPrice.toFixed(2)}</p>
                    <Button type="primary" onClick={() => handleAddToCart()}>Add To Cart</Button>
                </div>
            </div>
        </div>
    )
}