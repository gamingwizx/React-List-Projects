import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createDeleteBooking } from "../../services/apiBooking";
import toast from "react-hot-toast";
export default function useBookingDelete() {
    const client = useQueryClient()
    const {mutate: bookingDelete, isLoading} = useMutation({
        mutationFn: createDeleteBooking,
        onSuccess: (data) => {
            toast.success("Successfully deleted booking")
            client.invalidateQueries({queryKey: ["bookings"]})
        },
        onError: (error) => {
            console.error(error)
        }
    })

    return {bookingDelete, isLoading}
}