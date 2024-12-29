import { createGetSession } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";

export default function useGetSession() {
    const {data, isLoading, error} = useQuery({
        queryKey: ["user-session"],
        queryFn: createGetSession
    })
    return {data,isLoading}
}
