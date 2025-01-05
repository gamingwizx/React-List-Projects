import { useQuery } from "@tanstack/react-query";
import { createGetUserSession } from "../../services/apiAuth";
export default function useGetUserSession() {
    const {data, isLoading, isFetching} = useQuery({
        queryKey: ["currentUserSession"],
        queryFn: createGetUserSession
    })
    return {isLoading, isFetching, isAuthenticated: data?.role === "authenticated"}
}