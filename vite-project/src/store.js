import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User/UserSlice";
import cartReducer from "./features/Cart/CartSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
})

export default store