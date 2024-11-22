import {getBooking} from "../../services/apiBooking.js"
import { useQuery } from "@tanstack/react-query"
function useBooking() {
    const {isLoading, data: bookings, error } = useQuery({
        queryKey: ["bookings"],
        queryFn: getBooking
    })
    return {bookings, isLoading, error}
}

export default useBooking