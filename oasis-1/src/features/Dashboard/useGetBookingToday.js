import { useQuery } from "@tanstack/react-query";
import { createGetTodayBooking } from "../../services/apiBooking";
function useGetBookingToday() {
    const {data, isLoading, error} = useQuery({
        queryKey: ["get-today-bookings"],
        queryFn: createGetTodayBooking
    })
    return {data, error, isLoading}
}

export default useGetBookingToday