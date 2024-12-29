import { useQuery } from "@tanstack/react-query";
import { createGetTotalOccupiedCabins } from "../../services/apiBooking";
function useGetTotalOccupiedCabins(startDate, endDate) {
    const {data, isLoading} = useQuery({
        queryKey: ["total-occupied-cabins", startDate, endDate],
        queryFn: createGetTotalOccupiedCabins
    })

    return {data, isLoading}
}

export default useGetTotalOccupiedCabins