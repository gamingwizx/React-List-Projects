import { useQuery } from "@tanstack/react-query";
import { createGetTotalCabins } from "../../services/apiCabin";
function useGetTotalCabins() {
    const {data, isLoading} = useQuery({
        queryKey: ["cabins"],
        queryFn: createGetTotalCabins
    })
    return {data,isLoading}
}
export default useGetTotalCabins