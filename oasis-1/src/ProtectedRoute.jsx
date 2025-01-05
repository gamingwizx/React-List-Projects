import useGetUserSession from "./features/Auth/useGetUserSession";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./ui/Spinner";
function ProtectedRoute({children}) {
    const navigate = useNavigate()
    const {isLoading, isFetching, isAuthenticated} = useGetUserSession()
    
    useEffect(() => {
        if (!isFetching && !isAuthenticated) navigate("/auth/login")

    }, [isLoading, isAuthenticated, navigate, isFetching])

    if (isFetching) return <Loader></Loader>

    if (isAuthenticated) return children
}

export default ProtectedRoute