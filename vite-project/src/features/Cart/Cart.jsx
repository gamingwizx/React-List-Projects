import { Form } from "react-router-dom"
export default function Cart() {
    const cart = [
        {
            pizzaId: 1,
            name: "Margherita",
            quantity: 1,
            unitPrice: 12,
            totalPrice: 12,
            }
    ]
    const test = "asd"
    return (
        <>
            <Form method="POST">
                <input
                    defaultValue="Hello"
                    value={test}
                    name="username"
                    type="text"
                ></input>
                <input name="cart" value={JSON.stringify(cart)}></input>
                <button type="submit">Order</button>
            </Form>
        </>
    )

    
}

