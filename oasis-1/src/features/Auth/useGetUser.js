import { createGetUser } from "../../services/apiAuth";
import { useQuery } from "@tanstack/react-query";
function useGetUser() {
    const {data, isLoading} = useQuery({
        queryKey: ["user-info"],
        queryFn: createGetUser
    })


    return {data, isLoading}
}

export default useGetUser