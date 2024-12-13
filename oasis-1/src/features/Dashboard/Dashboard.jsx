import styled from "styled-components";
import Label from "../../ui/Label.jsx"
import Stats from "./Stats.jsx"
import DashboardHeader from "./DashboardHeader";
import TodayActivity from "./TodayActivity.jsx";
import StaySummary from "./StaySummary.jsx";
import SalesSummary from "./SalesSummary.jsx";
import ContentHeader from "../../ui/ContentHeader.jsx"
import { useEffect } from "react";
const StyledDashboard = styled.div`
    height: 100%;
    grid-area: content;
    
`
const StyledDashboardLayout = styled.div`
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
    useEffect(() => {
        const initiateCall = async() => {
            // const data = await createTransferOwnership()
        }
        initiateCall()
    }, [])
    return (
        <StyledDashboard>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Dashboards</Label>
                <DashboardHeader />
            </ContentHeader>
            <StyledDashboardLayout>
                <Stats />
                <TodayActivity/>
                <StaySummary/>
                <SalesSummary/>
            </StyledDashboardLayout>
        </StyledDashboard>
    )
}

export default Dashboard