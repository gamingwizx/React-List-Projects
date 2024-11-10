/* eslint-disable */
import { Outlet, useNavigation } from "react-router-dom"
import { useEffect } from "react"
import Header from "./Header"
import CartLayout from "../features/Cart/CartLayout"
import { useSelector } from "react-redux"
 export default function AppLayout() {
    const navigation = useNavigation()
    const cart = useSelector((store) => store.cart.cart)
    const isLoading = navigation.state === "loading"
    useEffect(() => {
        console.log("Location changed")
    }, [location])
    return (
        <div className="">
            {isLoading && 
                <div className="inset-0 z-0 flex items-center justify-center backdrop-blur-sm absolute">
                    <div className="bars6"></div>
                </div>}
          <div className="w-screen grid grid-rows-layout h-screen bg-gray-200">
            <Header></Header>
            <div className="overflow-scroll flex">
                <main className="mx-auto max-w-3xl w-full">
                    <Outlet></Outlet>
                </main>
            </div>
            {cart.length > 0 && <CartLayout></CartLayout> }
            
            
          </div>  
        </div>
    )
}