import { useLoaderData } from "react-router-dom"
import { getMenu } from "../../services/apiRestaurant"
import MenuItem from "./MenuItem"
function Menu() {
    const menus = useLoaderData()
    console.log(menus)
    return (
        <>
        {menus.map((pizza) => (
            <MenuItem key={pizza.id} pizza={pizza}/>
        ))}
        </>
    )
}

export async function loader() {
    const menu = getMenu()
    return menu;
}

export default Menu