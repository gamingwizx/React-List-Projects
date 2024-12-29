import { useQuery } from "@tanstack/react-query";
import { createGetTotalCheckins } from "../../services/apiBooking";
function useGetTotalCheckins(startDate, endDate) {
    const {data: status, error, isLoading} = useQuery({
        queryKey: ["total-checkins", startDate, endDate],
        queryFn: createGetTotalCheckins,
        select: data => data.map(item => ({ status: item.status }))
    })

    return {status, error, isLoading}
}

export default useGetTotalCheckins