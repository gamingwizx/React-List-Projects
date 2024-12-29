import { useQuery } from "@tanstack/react-query";
import { createGetSummaryNights } from "../../services/apiBooking";

function useGetSummaryNights(startDate, endDate) {
    const {data, isLoading, error} = useQuery({
        queryKey: ["summary-nights", startDate, endDate],
        queryFn: createGetSummaryNights
    })
    return {data, error, isLoading}
}

export default useGetSummaryNights