export default function MenuItem(pizza) {
    const {name, unitPrice, ingredients, imageUrl} = pizza.pizza
    return (
        <div className="flow-left w-3/4 flex p-3 border-gray-400 border-b justify-between">
            <div className="flex gap-4">
                <img className="h-24" src={imageUrl}></img>
                <div className="self-stretch justify-between flex flex-col items-start">
                    <div className="flex flex-col items-start capitalize">
                    <p className="font-bold text-xl">{name}</p>
                        {ingredients.join(", ")}
                    </div>
                    <p className="text-2xl">€{unitPrice.toFixed(2)}</p>
                </div>
            </div>
            <button className="rounded-3xl uppercase bg-yellow-500 self-end">Add to Cart</button>
        </div>
    )
}