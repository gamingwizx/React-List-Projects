import { useMutation, useQueryClient } from "@tanstack/react-query";
import {createUpdateUserInfo} from "../../services/apiAuth"
import {toast} from "react-hot-toast"
function useUpdateUser() {
    const query = useQueryClient()
    const {mutate: updateUser, isLoading, error} = useMutation({
        mutationFn: createUpdateUserInfo,
        onSuccess: (data) => {
            query.invalidateQueries({queryKey: ["avatar-image"]})
            query.invalidateQueries({ queryKey: ["userInfo"]})
            toast.success("Successfully updated user")
        },
        onError: (error) => {
            console.error(error)
        }
    })
    return {updateUser, isLoading, error}
}


export default useUpdateUser