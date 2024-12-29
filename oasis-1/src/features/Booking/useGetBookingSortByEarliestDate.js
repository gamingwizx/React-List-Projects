import { createGetBookingSortByEarliestDate } from "../../services/apiBooking";
import { useQuery } from "@tanstack/react-query";

function useGetBookingSortByEarliestDate() {
    const {data, isLoading, error} = useQuery({
        queryKey: ["booking"],
        queryFn: createGetBookingSortByEarliestDate
    })

    return {data, isLoading}
}

export default useGetBookingSortByEarliestDate