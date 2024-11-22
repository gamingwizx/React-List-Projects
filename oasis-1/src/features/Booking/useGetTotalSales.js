import { useQuery, useQueryClient } from "@tanstack/react-query";
import {createGetTotalSales} from "../../services/apiBooking"
function useGetTotalSales() {
    const {data: totalPrice, isLoading, error} = useQuery({
        queryKey: ["bookings"],
        queryFn: () => createGetTotalSales(),
        select: data => data.map(item => ({ totalprice: item.totalprice}))
    })

    return {totalPrice, error, isLoading}
}

export default useGetTotalSales