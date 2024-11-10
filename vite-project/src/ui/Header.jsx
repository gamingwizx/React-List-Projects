import {useSelector} from "react-redux"
import SearchOrder from "../features/Order/SearchOrder"
import { Link } from "react-router-dom"
export default function Header() {
    const username = useSelector((store) => store.user.username)
    // const username = useSelector((store) => store.user.username)

    return (<header className="flex justify-between items-center p-3 bg-yellow-500">
        <Link to="/" className="uppercase sm:text-xl text-sm tracking-wide font-normal">Fast React Pizza Co.</Link>
        <SearchOrder></SearchOrder>
        <div className="text-sm sm:text-xl uppercase font-medium">{username}</div>
    </header>)
}