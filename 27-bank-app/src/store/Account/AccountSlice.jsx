import {useRef} from "react"

const initialStateAccount = {
    balance: 0,
    currencyList: [],
    loan: 0
}

export default function accountReducer(state = initialStateAccount, action) {
    switch(action.type) {
        case "account/deposit":
            return {...state, balance: state.balance + action.payload}
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload}
        case "account/payLoan":
            return {...state, balance: state.balance - action.payload, loanAmount: state.loanAmount - action.payload}
        case "account/currencies":
            return {...state, currencyList: action.payload}
        case "account/withdraw":
            return {...state, balance: state.balance - action.payload}
        case "account/requestLoan":
            return {...state, loan: state.loan + action.payload, balance: state.balance + action.payload}
        default:
            return state;
    }
}

async function convertCurrency(currency, value) {
    const fetchOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"}
    }
    const controller = new AbortController()
    console.log(value)
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${currency}&to=USD`, fetchOption, {signal: controller.signal})
    if (!res.ok) throw new Error("Something went wrong when converting currency")
    const data = await res.json()
    return data
}

export const deposit = (currency, value) => {
    return async function(dispatch, getState) {
        const res = await fetch(`https://api.frankfurter.app/latest?amount=${value}&from=${currency}&to=USD`)
        if (!res.ok) throw new Error("Something went wrong when converting currency")
        const data = await res.json()
    if (!data) throw new Error("Couldn't fetch converted data")
    dispatch({type: "account/deposit", payload:data.rates.USD})

    }
}

export function fetchCurrencyList() {
    return async function(dispatch, getState) {
        const res = await fetch(`https://api.frankfurter.app/currencies`);
    if (!res.ok) throw new Error("Something went wrong when fetching currency list")
    const data = await res.json()
    dispatch({type: "account/currencies", payload: data})
    }
}

export const withdraw = (value) => {
    return { type: "account/withdraw", payload: value}
}

export const requestLoan = (value) => {
    console.log("Hello123")
    return {type: "account/requestLoan", payload: value}
}