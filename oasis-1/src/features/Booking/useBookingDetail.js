import { useQuery } from "@tanstack/react-query";
import {useParams} from "react-router-dom"
import { getBookingDetail } from "../../services/apiBooking";
function useBookingDetail() {
    const {id} = useParams()
    const {isLoading, data: bookingDetail = {}, error} = useQuery({
        queryKey: ["bookings", id],
        queryFn: () => getBookingDetail(id)
    })
    return {isLoading, bookingDetail, error}
}

export default useBookingDetail