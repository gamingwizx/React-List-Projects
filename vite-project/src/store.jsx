import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/User/userSlice"
const reducers = configureStore({
    reducer: {
        user: userReducer
    }
})

export default reducers;