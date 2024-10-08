import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    cart: [],
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart = [...state.cart, {...action.payload , quantity: 1}]
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(cartItem => cartItem.pizzaId !== action.payload.id)
        },
        increaseAmount(state, action) {
            state.cart = state.cart.map(cartItem => cartItem.pizzaId === action.payload.pizza.id ? {...cartItem, quantity: cartItem.quantity + 1} : {...cartItem, quantity: cartItem.quantity})
        },
        decreaseAmount(state, action) {
            state.cart = state.cart.map(cartItem => cartItem.pizzaId === action.payload.pizza.id ? {...cartItem, quantity: cartItem.quantity > 0 ? cartItem.quantity - 1 : 0} : {...cartItem, quantity: cartItem.quantity})
        },
        /* eslint-disable */ 
        clearCart(state, action) {
            state.cart = []
        }
    }
})


// export function removeFromCart(id) {
//     return async function(dispatch, getState) {
//         const cartItem = getState().cart.cart.slice().filter(item => item.pizza.id === id.toString() )
//         dispatch(removeItem(cartItem))
//     }
// }

export const {addItem, removeItem, increaseAmount, decreaseAmount, clearCart} = cartSlice.actions
export default cartSlice.reducer
