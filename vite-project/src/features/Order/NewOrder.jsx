import { useLoaderData, useFetcher } from "react-router-dom"
import UpdateOrder from "./UpdateOrder"
import { getOrder } from "../../services/apiRestaurant"
import Label from "../../ui/Label"
import { useEffect } from "react"
export default function NewOrder() {
    const order = useLoaderData().data
    const fetcher = useFetcher()

    const estimatedDeliveryTimestamp = new Date(order.estimatedDelivery)
    const month = estimatedDeliveryTimestamp.toLocaleString("default", {month: 'short'})
    const day = estimatedDeliveryTimestamp.getDate()
    const hour = estimatedDeliveryTimestamp.getHours()
    const formattedHour = hour > 12 ? hour - 12 : hour
    const minutes = estimatedDeliveryTimestamp.getMinutes()
    const ampm = hour >= 12 ? "pm" : "am"
    const formattedTime = `${month} ${day}, ${String(formattedHour).padStart(2,0)}:${minutes}${ampm}`

    useEffect(() => {
        if (!fetcher.data && fetcher.state === "idle")
            fetcher.load("/menu")
    },[fetcher])
    console.log(fetcher.data)
    return (
        <div className="text-2xl flow">
            {order && 
            <>
            <div className="flex justify-between pt-6 items-center">
                <p className="font-semibold">Order {order.id} status</p>
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
                <div className="flex text-lg justify-between flow" key={item.pizzaId}>
                    <div className="flex flex-col">
                        <div className="flex">
                            <span className="self-center text-center">{item.quantity}&times;&nbsp;</span>
                            <span>{item.name}</span>
                        </div>
                        <p className="font-light capitalize">
                        {fetcher?.data?.find(menuItem => menuItem.id === item.pizzaId)?.ingredients.join(" ,")}
                        </p>
                    </div>
                    <p className="font-bold">€{item.totalPrice.toFixed(2)}</p>

                </div>
            ))}
            </div>
            <div className="tracking-wider bg-gray-300 py-5 px-5 text-lg">
                <p>Price pizza: €{order.orderPrice}</p>
                <p>Price priority: €{order.orderPrice + order.priorityPrice}</p>
                <p className="font-bold">To pay on delivery: €{order.orderPrice + order.priorityPrice}</p>
            </div>
            <UpdateOrder/>
            </>
            }
        </div>
    )
}

export async function loader({params}) {
    const data = await getOrder(params.orderId)
    return data
}