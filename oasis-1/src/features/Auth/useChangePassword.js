import { useMutation } from "@tanstack/react-query";
import {createChangePassword} from "../../services/apiAuth"
import toast from "react-hot-toast";
function useChangePassword() {
    const {mutate: changePassword, isLoading, error} = useMutation({
        mutationFn: createChangePassword

        // onSuccess: (response) => {
        //     console.log(response.contains("AuthWeakPasswordError"))
        //     if (response.contains("AuthWeakPasswordError")) {
        //         toast.error("Password should be at least 6 characters.")
        //     } else {
        //         toast.success("Successfully changed password")

        //     }
        // },
    })
    return {changePassword, isLoading, error}
}

export default useChangePassword