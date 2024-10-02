import SearchOrder from "../features/Order/SearchOrder"
import {useSelector} from "react-redux"
export default function Header() {
    const username = useSelector((store) => store.user.username)

    return (<header>
        <h1>
            Fast React Pizza Co.
        </h1>
        <SearchOrder></SearchOrder>
        <div>a{username}</div>
    </header>)
}