export default function CartLayout() {
    return (
        <div className="flex justify-between bg-gray-800">
            <div className="flex items-center gap-x-5 font-semibold p-2">
            <p className="uppercase text-white">23 Pizzas</p>
            <p className="uppercase text-white">$23.45</p>
            </div>
            <button className="uppercase bg-transparent text-white">Open Cart</button>
        </div>
    )
}