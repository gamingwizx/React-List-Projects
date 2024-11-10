import styled from "styled-components"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
import UpdatePassword from "./UpdatePassword"
const StyledAuthDashboardLayout = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
`

function AuthDashboardLayout() {
    return (
        <StyledAuthDashboardLayout>
            <UpdateUser></UpdateUser>
            <UpdatePassword></UpdatePassword>
        </StyledAuthDashboardLayout>
    )
}

export default AuthDashboardLayout