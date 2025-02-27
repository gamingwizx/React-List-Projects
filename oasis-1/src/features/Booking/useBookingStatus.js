import { useQuery } from "@tanstack/react-query";
import { getBookingStatus } from "../../services/apiBooking";
function useBookingStatus(id) {
    const {isLoading, data: bookingStatus, error} = useQuery({
        queryKey: ["booking-status"],
        queryFn: () => getBookingStatus(id)
    })

    return {error, bookingStatus, isLoading}
}

export default useBookingStatus