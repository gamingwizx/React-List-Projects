import {Outlet} from "react-router-dom"
import styled from "styled-components"

const StyledLayout = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`
function AuthLayout() {
    return (
        <StyledLayout>
            <Outlet></Outlet>
        </StyledLayout>
    )
}

export default AuthLayout