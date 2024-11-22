import { useQuery } from "@tanstack/react-query";
import { createGetTotalCheckins } from "../../services/apiBooking";
function useGetTotalCheckins() {
    const {data: status, error} = useQuery({
        queryKey: ["bookings"],
        queryFn: createGetTotalCheckins,
        select: data => data.map(item => ({ status: item.status }))
    })

    return {status, error}
}

export default useGetTotalCheckins