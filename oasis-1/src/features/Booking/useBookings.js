import {getBooking} from "../../services/apiBooking.js"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router-dom"
import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate.js"
function useBooking() {
    const [searchParams, setSearchParams] = useSearchParams()
    const filterByRaw = searchParams.get("filterBy")
    const filterBy = filterByRaw === "all" ? null : filterByRaw?.split("-")

    const sortByRaw = searchParams.get("sort")
    const sortBy = sortByRaw?.split("-")

    const page = searchParams.get("page")
    const pageSize = searchParams.get("pageSize")

    const {isLoading, data: bookings, error } = useQuery({
        queryKey: ["bookings", sortBy, filterBy, page, pageSize],
        queryFn: () => getBooking({sortBy, filterBy, page, pageSize})
    })
    return {bookings, isLoading, error}
}

export default useBooking