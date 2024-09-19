import {createStore, configureStore, combineReducers, applyMiddleware} from "redux"
import accountReducer from "./store/Account/AccountSlice.jsx"
import customerReducer from "./store/Customer/CustomerSlice.jsx"
import {thunk} from "redux-thunk"
const reducers = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store