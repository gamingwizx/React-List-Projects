import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createGetTotalOccupiedCabins } from "../../services/apiBooking";
async function useGetTotalOccupiedCabins() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(0)
    new Promise(async (resolve, reject) => {
        setIsLoading(true)
        const data = await createGetTotalOccupiedCabins()
        resolve(data)    
    }).then(data => {
        setIsLoading(false)
        setData(() => data)
    })
    return {data, isLoading} 
}
export default useGetTotalOccupiedCabins