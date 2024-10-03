import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
import CartLayout from "../features/Cart/CartLayout"
 export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <div className="w-screen grid grid-rows-layout h-screen text-center">
            {isLoading && <p>Loading...</p>}
            <Header></Header>
            <main className="bg-gray-200 overflow-auto">
                <Outlet></Outlet>
            </main>
            <CartLayout></CartLayout>
        </div>
    )
}