import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart = [...state.cart, {pizza: action.payload.pizza, quantity: 1}]
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(cartItem => cartItem.pizza.id !== action.payload.pizza.id)
        },
        increaseAmount(state, action) {
            state.cart = state.cart.map(cartItem => cartItem.pizza.id === action.payload.pizza.id ? {pizza: cartItem.pizza, quantity: cartItem.quantity + 1} : {pizza: cartItem.pizza, quantity: cartItem.quantity})
        },
        decreaseAmount(state, action) {
            state.cart = state.cart.map(cartItem => cartItem.pizza.id === action.payload.pizza.id ? {pizza: cartItem.pizza, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0} : {pizza: cartItem.pizza, quantity: cartItem.quantity})
        }
    }
})


// export function removeFromCart(id) {
//     return async function(dispatch, getState) {
//         const cartItem = getState().cart.cart.slice().filter(item => item.pizza.id === id.toString() )
//         dispatch(removeItem(cartItem))
//     }
// }

export const {addItem, removeItem, increaseAmount, decreaseAmount} = cartSlice.actions
export default cartSlice.reducer
