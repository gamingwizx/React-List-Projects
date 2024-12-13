import { useMutation, useQuery } from "@tanstack/react-query"
import { createGetAvatarImage, createRetrieveUserInfo } from "../../services/apiAuth"
function useGetAvatarImage1() {
    const {data, mutateAsync: getAvatarImage, isLoading, error, isSuccess} = useMutation({
        mutationFn: createGetAvatarImage,
    })

    return {data, getAvatarImage, isLoading, error, isSuccess}
}

function useGetAvatarImage(filename) {

    const {data, isLoading} = useQuery({
        queryKey: ["avatar-image", filename],
        queryFn: createGetAvatarImage
    })

    return {data, isLoading}
}
export default useGetAvatarImage