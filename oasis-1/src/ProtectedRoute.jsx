import useGetUserSession from "./features/Auth/useGetUserSession";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./ui/Spinner";
export default function ProtectedRoute({children}) {
    const navigate = useNavigate()
    const {isLoading, isAuthenticated} = useGetUserSession()
    
    useEffect(() => {
        if (!isLoading && !isAuthenticated) navigate("/auth/login")

    }, [isLoading, isAuthenticated, navigate])

    if (isLoading) return <Loader></Loader>

    if (isAuthenticated) return children
}