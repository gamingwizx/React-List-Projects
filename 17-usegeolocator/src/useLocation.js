import {useState} from 'react'

const useLocation = () => {
    const [lat, setLat] = useState(0)
    const [long, setLong] = useState(0)
    const [number, setNumber] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    
    
    const setPosition = () => {
        if (!navigator.geolocation){
            throw new Error("Your browser doesn't support geolocation.")
        }
        setNumber(num => num + 1)

        setIsLoading(true)
        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude)
            setLong(position.coords.longitude)
            }, (error) => {
                console.error(error)
            })
            setIsLoading(false)
    }
        
    return {lat, long, isLoading, number, setPosition}
    }

export default useLocation