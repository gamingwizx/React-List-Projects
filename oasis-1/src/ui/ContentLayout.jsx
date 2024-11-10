import styled from "styled-components"
import { Outlet } from "react-router-dom"
import ContentHeader from "./ContentHeader"
const StyledContentLayout = styled.div`
    display: flex;
    grid-area: contentLayout;
    flex-direction: column;
`
const StyledOutlet = styled.div`
    margin: calc(var(--spacing) * 2);

`

function ContentLayout() {
    return (
        <StyledContentLayout>
            <ContentHeader/>
            <StyledOutlet>
                <Outlet />

            </StyledOutlet>
        </StyledContentLayout>
    )
}

export default ContentLayout