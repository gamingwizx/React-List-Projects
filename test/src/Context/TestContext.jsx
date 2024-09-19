import {useContext, createContext, useReducer, useEffect, useState, useMemo} from "react"
import {faker} from "@faker-js/faker"
const randomPost = () => {
    return {
        title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
        body: faker.hacker.phrase()
    }
}
const TestContext = createContext()
const initialState = {
    posts: [],
    searchQuery: "",
    numVisit: 0,
    cartItems: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case "load":
            return {...state, posts: action.payload}
        case "search":
            return {...state, searchQuery: action.payload}
        case "addCartItem":
            return {...state, cartItems: state.cartItems + action.payload}
    }
}
function TestProvider({children}) {
    const [{posts, searchQuery, numVisit, cartItems}, dispatch] = useReducer(reducer, initialState)
    const [test, setTest] = useState("")
    const handleSetTest = (value) => {
        setTest(() => {return value})
    }
    const handleConsoleLog = () => {
        console.log("Hello")
    }
    const search = (value) => {
        console.log(value)
        dispatch({type:"search", payload: value})
    }
    const addCartItem = () => {
        dispatch({type: "addCartItem", payload: 1})
    }
    const hello = "Hello"
    const values = useMemo(() => {return {posts, handleSetTest, handleConsoleLog, search, hello, searchQuery, addCartItem, numVisit, cartItems}}, [posts, searchQuery, cartItems])
    useEffect(() => {
        const randomPosts = Array.from({length: 10000}, () => {
            return randomPost()
        })
        dispatch({type: "load", payload: randomPosts})
    }, [])
    return (
        <TestContext.Provider value={values}>
            {children}
        </TestContext.Provider>
    )
}

const useTest = () => {
    const context = useContext(TestContext)
    if (context === undefined) return;
    return context 
}

export {useTest, TestProvider}