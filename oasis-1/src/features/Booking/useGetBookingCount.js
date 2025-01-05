import { getBookingCount } from "../../services/apiBooking";
import { useQuery } from "@tanstack/react-query";

export default function useGetBookingCount() {
    const {data, isLoading} = useQuery({
        queryKey: ["booking-count"],
        queryFn: getBookingCount
    })
    return {data, isLoading}
}