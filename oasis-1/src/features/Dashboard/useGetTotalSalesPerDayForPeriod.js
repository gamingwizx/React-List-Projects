import { createGetTotalSalesPerDayForPeriod } from "../../services/apiBooking";
import { useQuery } from "@tanstack/react-query";
export default function useGetTotalSalesPerDayForPeriod(startDate, endDate) {
    const {data, isLoading, error} = useQuery({
        queryKey: ["total-sales-per-day-for-period", startDate, endDate],
        queryFn: createGetTotalSalesPerDayForPeriod
    })

    return {data, isLoading, error}
}