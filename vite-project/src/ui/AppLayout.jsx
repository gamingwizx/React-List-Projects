import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartLayout from "../features/Cart/CartLayout"
 export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <div className="w-screen grid grid-rows-layout h-screen bg-gray-100">
            {isLoading && <p>Loading...</p>}
            <Header></Header>
            <div className="overflow-scroll">
                <main className="mx-auto max-w-3xl">
                    <Outlet></Outlet>
                </main>
            </div>
            <CartLayout></CartLayout>
        </div>
    )
}