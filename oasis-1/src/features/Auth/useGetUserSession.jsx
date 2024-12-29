import { useQuery } from "@tanstack/react-query";
import { createGetUserSession } from "../../services/apiAuth";
export default function useGetUserSession() {
    const {data, isLoading} = useQuery({
        queryKey: ["currentUserSession"],
        queryFn: createGetUserSession
    })
    return {isLoading, isAuthenticated: data?.role === "authenticated"}
}