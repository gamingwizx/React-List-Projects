import {useQuery} from "@tanstack/react-query"
import {createRetrieveUserInfo} from "../../services/apiAuth"

function useRetrieveUserInfo() {
    const {isLoading, data, error, fetchStatus} = useQuery({
        queryKey: ["userInfo"],
        queryFn: createRetrieveUserInfo
    })
    return {data, fetchStatus, error}
}
export default useRetrieveUserInfo
