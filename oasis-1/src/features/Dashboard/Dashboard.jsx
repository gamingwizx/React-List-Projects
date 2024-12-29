import { useState } from "react";
import styled from "styled-components";
import Label from "../../ui/Label.jsx"
import Stats from "./Stats.jsx"
import DashboardHeader from "./DashboardHeader";
import TodayActivity from "./TodayActivity.jsx";
import StaySummary from "./StaySummary.jsx";
import SalesSummary from "./SalesSummary.jsx";
import ContentHeader from "../../ui/ContentHeader.jsx"
import { useEffect } from "react";
import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate.js"
import { useSearchParams } from "react-router-dom";

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
    let startDate = new Date()
    let endDate = new Date()
    const [searchParams, setSearchParams] = useSearchParams()
    if (searchParams.length === 0) setSearchParams({ last: 7 })
    endDate.setDate(endDate.getDate() - searchParams.get("last"))
    startDate = FormatTimestampToFormattedStringDate(startDate)
    endDate = FormatTimestampToFormattedStringDate(endDate)

    return (
        <StyledDashboard>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Dashboards</Label>
                <DashboardHeader/>
            </ContentHeader>
            <StyledDashboardLayout>
                <Stats startDate={startDate} endDate={endDate}/>
                <TodayActivity/>
                <StaySummary startDate={startDate} endDate={endDate}/>
                <SalesSummary startDate={startDate} endDate={endDate}/>
            </StyledDashboardLayout>
        </StyledDashboard>
    )
}

export default Dashboard