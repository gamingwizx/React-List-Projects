import { useQuery } from "@tanstack/react-query";
import { createGetTotalBookings } from "../../services/apiBooking";

export default function useGetTotalBookings() {
    const {data, isLoading, error} = useQuery({
        queryKey: ["total-bookings"],
        queryFn: createGetTotalBookings
    })
    return {data, isLoading, error}
}