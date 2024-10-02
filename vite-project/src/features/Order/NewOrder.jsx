import { useLoaderData } from "react-router-dom"
import { getOrder } from "../../services/apiRestaurant"
export default function NewOrder() {
    const order = useLoaderData().data
    console.log(order.data)
    console.log("orderDetails")
    return (
        <>
            {order && 
            <>
            <p>Order {order.id} status</p>
            <p>{order.status}</p>
            {order.cart.map(item => (
                <div key={item.pizzaId}>
                    <p>{item.name}</p>
                    <p>{item.quantity}</p>
                    <p>{item.totalPrice}</p>

                </div>
            ))}
            <p>{order.orderPrice}</p>
            <p>{order.orderPrice + order.priorityPrice}</p>
            </>
            }
        </>
    )
}

export async function loader({params}) {
    const data = await getOrder(params.orderId)
    return data
}