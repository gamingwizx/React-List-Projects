import Test from "./Test"
import Map from "./Map"
import styles from './Applayout.module.css'
import {useEffect, useState, useReducer} from "react"
import { Link, Outlet, useParams } from "react-router-dom"
function Applayout() {
    const initialState = {
        dat: [],
        isLoading: false
    }
    const reducer = (state, action) => {
        switch(action.type){
            case "loading":
                return {...state, isLoading: true}
            case "load":
                return {...state, data: action.payload, isLoading: false} 

        }
    }
    const [{ data, isLoading }, dispatch] = useReducer(reducer, initialState)
    const [dats, setDats] = useState([])
    const [message, setMessage] = useState("")
    const {id} = useParams()

    useEffect(() => {
        async function fetchData() {
            dispatch({type: "loading"})
            const res = await fetch("http://localhost:8000/result")
            if (!res.ok) throw new Error("Hello")
                const data = await res.json()
            return data
        }
        fetchData().then((result) => {
            dispatch({type: "load", payload: result})
        })
    }, [])

    useEffect(() => {
        if (!data) return
        const dats = data.reduce((arr, da) => {
            if(!arr.map(item => item.name).includes(da.name)) {
                return [...arr, da]
            } else {
                return arr
            }
        }, [])
        setDats(dats)
    }, [data])

    useEffect(() => {
        console.log(id) 
        if (id === 1) {
            setMessage("Lmao")
        } else if (id === "2") {
            setMessage("Haha")
        }
    }, [id])
    
    if (isLoading) return <p>Loading...</p>

    return ( 
        <div className={styles.applayout}>
            <Test></Test>
            <Map></Map>
            <Outlet></Outlet>
            <div className={styles.column}>
            {data && data.map(dat => (
                <Link to={`/${dat.id}`} >{dat.name}</Link>
            ))}
            </div>
        </div>
    )
}

export default Applayout