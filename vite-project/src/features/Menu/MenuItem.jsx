export default function MenuItem(pizza) {
    const {name, unitPrice, ingredients} = pizza.pizza
    return (
        <>
            <p>{name}</p>
            {ingredients.map(ingredient => (
                <span key={ingredient}>{ingredient}</span>
            ))}
            <p>{unitPrice}</p>
        </>
    )
}