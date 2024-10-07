import Button from "../../ui/Button"
export default function CartItem(cartItem) {
    const {name, unitPrice} = cartItem.cartItem.pizza
    const quantity = cartItem.cartItem.quantity
    return (
        <div className="flex justify-between">
            <div>
                <span className="text-xl">{quantity}x&nbsp;&nbsp;</span>
                <span className="text-xl">{name}</span>
            </div>
            <div className="flow-left">
                <span className="font-bold">€{(unitPrice * quantity).toFixed(2)}</span>
                <Button type="primary">Delete</Button>
            </div>
        </div>
    )
}