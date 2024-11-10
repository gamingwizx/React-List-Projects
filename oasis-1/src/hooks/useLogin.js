import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";
import {loginApi} from "../services/apiAuth"
const useLogin = () => {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const {mutate: login, isLoading} = useMutation({
        mutationFn: loginApi,
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data.user)
            toast.success("Successfully logged in!")
            navigate("/home/dashboard", {replace: true})
        },
        onError: (error) => {
            console.error(error)
            toast.error(`${error}`)
        }
    })
    return {login, isLoading}
}

export default useLogin