/* eslint-disable */
import { useState } from "react";
import { placeOrder } from "../../services/apiRestaurant";
import { Form, useActionData, redirect } from "react-router-dom";
import {useSelector} from "react-redux"
import Button from "../../ui/Button";
export default function CreateOrder() {
        const cart = useSelector((store) => store.cart.cart)
        
        const formError = useActionData()
        const [username, setUsername] = useState("qweqqweqweqwwe")
        const [address, setAddress] = useState("qweqqweqweqwwe")
        const [phone, setPhoneNumber] = useState("0187883139")
        const [priority, setPriority] = useState(false)
    return (
        <Form className="flow" method="POST">
            <p className="text-3xl pt-5">Ready to order? Let&#39;s go!</p>
            <input name="cart" value={JSON.stringify(cart)} hidden></input>
            <div className="flow">
                <div className="flex">
                    <label className="form-label">Username</label>
                    <input name="username" className="form-input" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                {formError?.username && <p>{formError?.username}</p>}
                <div className="flex">
                    <label className="form-label">Address</label>
                    <input className="form-input" name="address" value={address} onChange={(e) => setAddress(e.target.value)}></input>
                    </div>
                {formError?.address && <p>{formError?.address}</p>}
                <div className="flex">
                    <label className="form-label">Phone number</label>
                    <input className="form-input" name="phone" value={phone} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                </div>
                <div className="flex gap-4">
                    <input className="w-6" name="priority" value={priority} onChange={((e) => setPriority(e.target.checked))} type="checkbox"></input>
                    <p className="text-xl font-semibold">Want to give your order priority?</p>
                    {formError?.phone && <p>{formError?.phone}</p>}
                </div>
            </div>
            <Button type="primary">Order Now</Button>
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
        address :data.address,
        customer: data.username,
        cart: JSON.parse(data.cart),
        phone: data.phone,
        position: "",
        priority: data.priority === "true"
    }
    if (!isValidPhone(data.phone)) error.phone = "Phone is wrong format!"
    if (!isValidUsername(data.username)) error.username = "Username must be longer than 10"
    if (!isValidUsername(data.address)) error.address = "Address must be longer than 10"
    console.log(newOrder)    
    if (Object.keys(error).length > 0) return error

    const res = await placeOrder(newOrder)

    return redirect(`/order/${res.id}`)
}