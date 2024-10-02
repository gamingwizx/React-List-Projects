import {createStore, combineReducers, applyMiddleware} from "redux"
import {configureStore} from "@reduxjs/toolkit"
import accountReducer from "./store/Account/AccountSlice.jsx"
import customerReducer from "./store/Customer/CustomerSlice.jsx"
import {thunk} from "redux-thunk"
const reducers = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

// const store = createStore(reducers, applyMiddleware(thunk))
const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store