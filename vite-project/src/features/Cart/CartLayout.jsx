import { useSelector } from "react-redux"
export default function CartLayout() {
    const cart = useSelector((store) => store.cart.cart)
    const totalPrice = cart.reduce((totalPrice, cartItem) => totalPrice + cartItem.pizza.unitPrice * cartItem.quantity, 0)
    console.log(totalPrice)
    return (
        <div className="flex justify-between bg-gray-800">
            <div className="flex items-center gap-x-5 font-semibold p-2">
            <p className="uppercase text-white">{cart.length} Pizzas</p>
            <p className="uppercase text-white">${totalPrice}</p>
            </div>
            <button className="uppercase bg-transparent text-white">Open Cart</button>
        </div>
    )
}