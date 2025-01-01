import styled from "styled-components"
import { Outlet } from "react-router-dom"
import ContentHeader from "./ContentHeader"
const StyledContentLayout = styled.div`
    display: flex;
    grid-area: contentLayout;
    flex-direction: column;
    background-color: var(--bg-zinc-100);
`
const StyledOutlet = styled.div`
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 4);
    background-color: var(--bg-zinc-100);

    @media(max-width: 800px) {
        padding: calc(var(--spacing) * 2) calc(var(--spacing));
    }
`

function ContentLayout() {
    return (
        <StyledContentLayout>
            <StyledOutlet>
                <Outlet />

            </StyledOutlet>
        </StyledContentLayout>
    )
}

export default ContentLayout