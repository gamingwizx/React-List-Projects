import { useQuery, useQueryClient } from "@tanstack/react-query";
import {createGetTotalSales} from "../../services/apiBooking"
import { useSearchParams } from "react-router-dom"
import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate.js"

function useGetTotalSales(startDate, endDate) {
    

    const {data: totalPrice, isLoading, error} = useQuery({
        queryKey: ["total-sales", startDate, endDate],
        queryFn: createGetTotalSales,
        select: data => data.map(item => ({ totalprice: item.totalprice}))
    })

    return {totalPrice, error, isLoading}
}

export default useGetTotalSales