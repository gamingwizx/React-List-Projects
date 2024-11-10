import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom"
import {toast} from "react-hot-toast"
import {registerApi} from "../services/apiAuth"

const useRegister = () => {
    const navigate = useNavigate()
    const {mutate: register, isLoading, error} = useMutation({
    mutationFn: registerApi,
    onSuccess: (user) => {
        toast.success("User successfully registered!")
        navigate("/login")
    },
    onError: (error) => {
        toast.error(`${error}`)
    }
})

return {register, isLoading}
}

export default useRegister