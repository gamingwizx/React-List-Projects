import {getBooking} from "../../services/apiBooking.js"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate.js"
function useBookingByRange(startDate, endDate) {

    const {isLoading, data: bookings, error } = useQuery({
        queryKey: ["bookings-by-range", startDate, endDate],
        queryFn: getBooking
    })
    return {bookings, isLoading, error}
}

export default useBookingByRange