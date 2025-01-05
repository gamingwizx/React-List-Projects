import { useMutation, useQuery } from "@tanstack/react-query";
import {createRetrieveUserInfo} from "../../services/apiAuth"
// function useRetrieveUserInfo() {
//     const {mutation: retrieveUserInfo, isLoading, error} = useMutation({
//         mutationFn: createRetrieveUserInfo,
//         onSuccess: (data) => {
//             console.log(data)
//         }
//     })
//     return {retrieveUserInfo, isLoading, error}
// }
function useRetrieveUserInfo() {
    const {data, isLoading} = useQuery({
        queryKey: ["user-info"],
        queryFn: createRetrieveUserInfo
    })
    return {data, isLoading}
}
export default useRetrieveUserInfo