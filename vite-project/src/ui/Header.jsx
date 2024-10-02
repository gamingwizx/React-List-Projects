// import {useSelector} from "react-redux"
import SearchOrder from "../features/Order/SearchOrder"
export default function Header() {
    // const username = useSelector((store) => store.user.username)

    return (<header className="flex justify-between p-3 bg-yellow-500">
        <p className="uppercase text-xl tracking-wide font-normal">Fast React Pizza Co.</p>
        <SearchOrder></SearchOrder>
        <div className="text-xl uppercase font-medium">Jonas</div>
    </header>)
}