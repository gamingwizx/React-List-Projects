const initialStateAccount = {
    customer: []
}

const customerReducer = (state = initialStateAccount, action) => {
    switch(action.type) {
        case "customer/register":
            return {...state, customer: action.payload}
        default:
            return state
    }
}

export const register = (value) => {
    return {type: "customer/register", payload: value}
}
export default customerReducer