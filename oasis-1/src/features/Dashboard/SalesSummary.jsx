import styled from "styled-components"
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from "recharts"
import Label from "../../ui/Label"
import { useEffect, useState } from "react"
import { createGetTotalSalesPerDayForPeriod } from "../../services/apiBooking"
import useGetTotalSalesPerDayForPeriod from "./useGetTotalSalesPerDayForPeriod"
const StyledSalesSummary = styled.div`
    grid-area: salesSummary;
    background-color: white;
    padding: 0 calc(var(--spacing) * 2);
`

function SalesSummary({startDate, endDate}) {
  const {data, isLoading, error} = useGetTotalSalesPerDayForPeriod(startDate, endDate)
    return (
        <StyledSalesSummary>
            <Label fontWeight="bold" fs="large" paddingtop="normal">Sales</Label>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="date_col" />
                    <YAxis name="Total Sales" unit="$">
                    </YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" fill="var(--bg-green-800)" stroke="var(--bg-green-300)" fillOpacity={1} />
                    <Area  dataKey="totalsales" fill="var(--bg-purple-800)" stroke="var(--bg-purple-300)" fillOpacity={1} />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesSummary>
    )
}

export default SalesSummary