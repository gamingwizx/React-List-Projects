import { useMutation } from "@tanstack/react-query";
import {useNavigate} from "react-router-dom"
import {createLogout} from "../../services/apiAuth"
import toast from "react-hot-toast";

export default function useLogout() {
    const navigate = useNavigate()
    const {mutate: logout, isLoading} = useMutation({
        mutationFn: createLogout,
        onSuccess: () => {
            toast.success("Successfully logged out")
            navigate(`/auth/login`)
        }
    })
    return {logout,isLoading} 
}