import { useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiRestaurant"
import Label from "../../ui/Label"
export default function NewOrder() {
    const order = useLoaderData().data
    const estimatedDeliveryTimestamp = new Date(order.estimatedDelivery)
    const month = estimatedDeliveryTimestamp.toLocaleString("default", {month: 'short'})
    const day = estimatedDeliveryTimestamp.getDate()
    const hour = estimatedDeliveryTimestamp.getHours()
    const formattedHour = hour > 12 ? hour - 12 : hour
    const minutes = estimatedDeliveryTimestamp.getMinutes()
    const ampm = hour >= 12 ? "pm" : "am"
    const formattedTime = `${month} ${day}, ${String(formattedHour).padStart(2,0)}:${minutes}${ampm}`

    return (
        <div className="text-2xl flow">
            {order && 
            <>
            <div className="flex justify-between items-center">
                <p className="pt-6 font-semibold">Order {order.id} status</p>
                <div className="flex gap-4">
                    {order.priority === true && <Label type="red">Priority</Label>}
                    {order.status === "preparing" && <Label type="green">Preparing Order</Label>}
                </div>
            </div>
            <div className="bg-gray-300 px-5 py-3 flex justify-between items-center">
                <p className="text-lg font-semibold">Only {estimatedDeliveryTimestamp.getMinutes()} minutes left 😀</p>
                <p className="text-sm">&#40;Estimated Delivery: {formattedTime}&#41;</p>
            </div>
            <div>

            {order.cart.map(item => (
                <div className="flex text-lg" key={item.pizzaId}>
                    <div>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                        <p>{JSON.stringify(item)}</p>
                        {/* {item.ingredients.map(ingredient => (
                            <p key={ingredient}>{ingredient}</p>
                        ))} */}
                    </div>
                    <p>{item.totalPrice}</p>

                </div>
            ))}
            </div>
            <p>{order.orderPrice}</p>
            <p>{order.orderPrice + order.priorityPrice}</p>
            </>
            }
        </div>
    )
}

export async function loader({params}) {
    const data = await getOrder(params.orderId)
    return data
}