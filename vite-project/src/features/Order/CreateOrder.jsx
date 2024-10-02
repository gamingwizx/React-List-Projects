import { useState } from "react";
import { placeOrder } from "../../services/apiRestaurant";
import { Form, useActionData, redirect } from "react-router-dom";
export default function CreateOrder() {
    
        const formError = useActionData()
        const [username, setUsername] = useState("")
        const [address, setAddress] = useState("")
        const [phone, setPhoneNumber] = useState("")
        const cart = [
            {
                pizzaId: 1,
                name: "Margherita",
                quantity: 1,
                unitPrice: 12,
                totalPrice: 12,
                }
        ]
    return (
        <Form method="POST">
            <input name="cart" value={JSON.stringify(cart)} hidden></input>
            <div>
                <label>Username</label>
                <input placeholder="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>
            {formError?.username && <p>{formError?.username}</p>}
            <div>
                <label>Address</label>
                <input placeholder="Address" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                </div>
            {formError?.address && <p>{formError?.address}</p>}
            <div>
                <label>Phone number</label>
                <input placeholder="Phone Number" name="phone" value={phone} onChange={(e) => setPhoneNumber(e.target.value)}></input>
            </div>
            {formError?.phone && <p>{formError?.phone}</p>}
            <button type="submit">Place order</button>
        </Form>
    )

}
export async function action({request}) {
    const isValidPhone = (str) =>
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
          str
        );

    const isValidUsername = (str) =>{
        if (str.length > 10) return true 
        else return false
    }
    const formData = await request.formData()
    const data = Object.fromEntries(formData) 
    const error = {}
    const newOrder = {
        address :"A-4106 Jalan Kubang Buaya",
        customer: "qwe",
        cart: JSON.parse(data.cart),
        phone: "0187883139",
        position: "",
        priority: false
    }
    if (!isValidPhone(data.phone)) error.phone = "Phone is wrong format!"
    if (!isValidUsername(data.username)) error.username = "Username must be longer than 10"
    if (!isValidUsername(data.address)) error.address = "Address must be longer than 10"
    
    console.log(error)
    if (Object.keys(error).length > 0) return error

    const res = await placeOrder(newOrder)

    return redirect(`/order/${res.id}`)
}