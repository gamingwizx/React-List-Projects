/* eslint-disable */
import Button from "../../ui/Button"
import { useFetcher } from "react-router-dom"
import { updateOrder } from "../../services/apiRestaurant"
function UpdateOrder() {
    const fetcher = useFetcher()
    return (
        <fetcher.Form method="POST">
            <Button type="primary">Make Priority</Button>

        </fetcher.Form>
    )
}
export default UpdateOrder
export async function action({params}) {
    const newObject = { priority: true}
    await updateOrder(params.orderId, newObject)
    return null
}