import { useMutation } from "@tanstack/react-query";
import {createRequestChangePassword} from "../../services/apiAuth"
import toast from "react-hot-toast";
function useRequestChangePassword() {
    const {mutate: requestChangePassword, isLoading, error} = useMutation({
        mutationFn: createRequestChangePassword,
        onSuccess: () => {
            toast.success("Successfully sent email to change password!")
        },
        onError: (error) => {
            toast.error(error)
        }
    })
    return {requestChangePassword, isLoading, error}
}

export default useRequestChangePassword