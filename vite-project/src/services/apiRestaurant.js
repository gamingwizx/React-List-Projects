const API_URL = "https://react-fast-pizza-api.onrender.com/api"

export async function getMenu() {
    const res = await fetch(`${API_URL}/menu`)

    if (!res.ok) throw new Error("Something went wrong when fetching API");
    const {data} = await res.json()
    return data
}

export async function placeOrder(newOrder) {
    console.log(JSON.stringify(newOrder))
    const fetchOptions = {
        method: "POST",
        body: JSON.stringify(newOrder),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const res = await fetch(`${API_URL}/order`, fetchOptions)
    if (!res.ok) throw Error("Something went wrong when pplacing order")
    const {data} = await res.json()
    return data
}

export async function getOrder(orderId) {
    const res = await fetch(`${API_URL}/order/${orderId}`)
    if (!res.ok) throw Error(`Could not find order ${orderId}`)
    const data = await res.json()
    return data
}

export async function updateOrder(orderId, obj) {
    const fetchOptions = {
        method: "PATCH",
        body: JSON.stringify(obj),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const res = await fetch(`${API_URL}/order/${orderId}`, fetchOptions)
    if (!res.ok) throw new Error(res.message)
    const data = await res.json()
    return data
}