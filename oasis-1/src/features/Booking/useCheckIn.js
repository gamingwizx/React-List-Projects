import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCheckIn } from "../../services/apiBooking";
import {toast} from "react-hot-toast"
function useCheckIn() {
    const query = useQueryClient()
    const {mutate: checkIn, isLoading, error} = useMutation({
        mutationFn: createCheckIn,
        onSuccess: (data) => {
            toast.success("Successfully checked in guest")
            query.invalidateQueries({ queryKey: ["get-today-bookings"]})
        },
        onError: (error) => {
            toast.error("Error when checking in booking")
            console.error(error)
        }
    })

    return {checkIn, isLoading, error}
}

export default useCheckIn