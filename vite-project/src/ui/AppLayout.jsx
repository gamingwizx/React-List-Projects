import { Outlet, useNavigation } from "react-router-dom"
import Header from "./Header"
 export default function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === "loading"
    return (
        <div className="text-3xl font-bold underline">
            {isLoading && <p>Loading...</p>}
            <Header></Header>

            <main>
                <h1 className="text-3xl font-bold underline text-yellow-500">Content</h1>
                <Outlet></Outlet>
            </main>
        </div>
    )
}