import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartLayout from "../features/Cart/CartLayout"
import { useSelector } from "react-redux"
 export default function AppLayout() {
    const navigation = useNavigation()
    const cart = useSelector((store) => store.cart.cart)
    const isLoading = navigation.state === "loading"
    return (
        <>
            {isLoading && 
                <div className="inset-0 z-0 flex items-center justify-center backdrop-blur-sm absolute">
                    <div className="bars6"></div>
                </div>}
          <div className="w-screen grid grid-rows-layout h-screen bg-gray-100">
            <Header></Header>
            <div className="overflow-scroll">
                <main className="mx-auto max-w-3xl">
                    <Outlet></Outlet>
                </main>
            </div>
            {cart.length > 0 && <CartLayout></CartLayout> }
            
            
          </div>  
        </>
    )
}