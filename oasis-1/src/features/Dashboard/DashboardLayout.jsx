import styled from "styled-components"
import Stats from "./Stats"
const StyledDashboardLayout = styled.div`
    grid-area: content;
    display: grid;
    grid-template-rows: auto auto auto auto;
    gird-template-columns: auto auto auto auto;
    gird-template-areas:
    "dashboardTitle dashboardTitle filter filter"
    "stat stat stat stat"
    "stat stat stat stat"
    "stat stat stat stat"
`

function DashboardLayout() {
    return (
        <StyledDashboardLayout>

        </StyledDashboardLayout>
    )
}

export default DashboardLayout