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

export default StyledDashboardLayout