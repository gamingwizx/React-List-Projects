import styled from "styled-components";
import Label from "../../ui/Label.jsx"
import Stats from "./Stats.jsx"
import TodayActivity from "./TodayActivity.jsx";
import StaySummary from "./StaySummary.jsx";
import SalesSummary from "./SalesSummary.jsx";
const StyledDashboard = styled.div`
    
    height: 100%;
    grid-area: content;
    display: grid;
    grid-template-rows: 0.5fr 2fr 2fr;
    grid-template-columns: auto auto auto auto;
    grid-template-areas:
    "stats stats stats stats"
    "todayActivity todayActivity todayActivity staySummary"
    "salesSummary salesSummary salesSummary salesSummary";
    z-index: 2;
    gap: calc(var(--spacing) / 4);
    
    gap: var(--spacing);
`

function Dashboard() {
    return (
        <StyledDashboard>
            <Stats />
            <TodayActivity/>
            <StaySummary/>
            <SalesSummary/>
        </StyledDashboard>
    )
}

export default Dashboard