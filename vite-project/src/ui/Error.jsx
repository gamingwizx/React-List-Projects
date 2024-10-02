import { useRouteError, useNavigate } from "react-router-dom"
export default function Error() {
    const error = useRouteError()
    const navigate = useNavigate()
    return (
        <>
        <h1>Something went wrong</h1>
        <p>{error.data || error.message}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}