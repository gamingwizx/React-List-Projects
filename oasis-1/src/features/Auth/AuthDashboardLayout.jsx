import styled from "styled-components"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
import UpdatePassword from "./UpdatePassword"
import useRetrieveUserInfo from "./useRetrieveUserInfo1" 
import Loader from "../../ui/Spinner"
const StyledAuthDashboardLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
`

function AuthDashboardLayout() {
    const {data, fetchStatus: retrieveUserInfoStatus} = useRetrieveUserInfo()
    if(retrieveUserInfoStatus === "fetching") return <Loader></Loader>
    const {user_metadata, id} = data
    const {filename, fullname, email} = user_metadata
    console.log("Running")
    return (
        <StyledAuthDashboardLayout>
            <UpdateUser fullname={fullname} email={email} filename={filename} id={id}></UpdateUser>
            <UpdatePassword email={email}></UpdatePassword>
        </StyledAuthDashboardLayout>
    )
}

export default AuthDashboardLayout