/* eslint-disable */
import { useEffect, useState } from "react";
import { placeOrder } from "../../services/apiRestaurant";
import { Form, useActionData, redirect, useNavigation, Link } from "react-router-dom";
import {useSelector} from "react-redux"
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import {getCurrentPosition} from "../User/UserSlice"
import useWindowSize from "../../context/useWindowSize";
export default function CreateOrder() {
        const cart = useSelector((store) => store.cart.cart)
        const currentAddress = useSelector((store) => store.user.address)
        const [size, setSize] = useState([])
        const formError = useActionData()
        const navigate = useNavigation()
        const isSubmitting = navigate.state === "submitting"
        const [username, setUsername] = useState("qweqqweqweqwwe")
        const [address, setAddress] = useState("qweqqweqweqwwe")
        const [phone, setPhoneNumber] = useState("0187883139")
        const [priority, setPriority] = useState(false)
        const dispatch = useDispatch()

        const throttle = (fn, time) => {
            let timeout = null
            return function() {
                if (timeout) return
                const context = this
                const args = arguments
                const later = () => {
                    fn.call(context, ...args)
                    timeout = null
                }
                timeout = setTimeout(later, time)
            }
        }

        useEffect(() => {
            function updateSize() {
                setSize({width: window.innerWidth, height: window.innerHeight})
            }
            window.addEventListener("resize", throttle(updateSize, 1000))
        }, [])

        const handleGetPosition = (e) => {
            e.preventDefault()
            dispatch(getCurrentPosition())
        }

        const getPositionText = size.width >= 500 ? "Get Position" : "📍"
        
    if (cart.length <= 0) {
        return (
        <div className="flex flex-col gap-4">
            <Link className="py-5" to="/menu">Back to Menu</Link>
            <p className="font-bold text-xl tracking-wide">Your cart is empty, order some pizza!</p>
        </div>

        ) 
    }

    return (
        <>
        
        <Form className="flow px-5" method="POST">
            <p className="md:text-3xl text-2xl pt-5">Ready to order? Let&#39;s go!</p>
            <input name="cart" value={JSON.stringify(cart)} hidden></input>
            <div className="flow">
                <div className="flex">
                    <label className="form-left text-sm">Username</label>
                    <div className="basis-3/4 w-full">
                        <input name="username" className="w-full p-3 text-xs md:text-base rounded-full" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                        {formError?.username && <p className="mt-2 bg-red-100 px-2 py-1 rounded-md text-red-700">{formError?.username}</p>}
                    </div>
                    </div>
                
                <div className="flex">
                    <label className="form-left text-sm">Address</label>
                    <div className="basis-3/4 relative w-full bg-black rounded-full bg-white focus-within:border-yellow-500 border-2">
                        <input name="address" className="p-3 rounded-full text-xs focus:border-opacity-50 md:text-base focus:outline-none w-4/6" value={currentAddress ? currentAddress : address} onChange={(e) => setAddress(e.target.value)}></input>
                        {/* <Button type="inside" onClick={(e) => handleGetPosition(e)}>Hello</Button> */}
                        <Button type="inside" onClick={(e) => handleGetPosition(e)}>{getPositionText}</Button>
                        {formError?.address && <p className="mt-2 bg-red-100 px-2 py-1 rounded-md text-red-700">{formError?.address}</p>}
                    </div>
                    
                    </div>
                <div className="flex">
                    <label className="form-left text-sm">Phone number</label>
                    <div className="basis-3/4 w-full">
                        <input className="w-full p-3 rounded-full text-xs md:text-base" name="phone" value={phone} onChange={(e) => setPhoneNumber(e.target.value)}></input>
                        {formError?.phone && <p className="mt-2 bg-red-100 px-2 py-1 rounded-md text-red-700">{formError?.phone}</p>}
                    </div>
                </div>
                <div className="flex gap-4">
                    <input className="w-6" name="priority" value={priority} onChange={((e) => setPriority(e.target.checked))} type="checkbox"></input>
                    <p className="text-xl font-semibold">Want to give your order priority?</p>
                </div>
            </div>
            <Button disabled={isSubmitting} type="primary">{isSubmitting ? "Submitting order..." : "Place order"}</Button>
        </Form>
        </>
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

    if (Object.keys(error).length > 0) return error

    const res = await placeOrder(newOrder)

    return redirect(`/order/${res.id}`)
}