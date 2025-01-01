import styled from "styled-components"
import Label from "../../ui/Label"
import Activity from "./Activity"
import Hr from "../../ui/Hr"
import { useEffect, useState } from "react"
import useGetBookingToday from "./useGetBookingToday.js"
import { createGetTodayBooking } from "../../services/apiBooking"
import Loader from "../../ui/Spinner.jsx"
const StyledTodayActivity = styled.div`
    grid-area: todayActivity;
    background-color: white;
    border-radius: calc(var(--spacing) / 2);
    padding: calc(var(--spacing));
    overflow-y: scroll;
    height: 100%;
`

function TodayActivity() {
    const {data = [], isLoading} = useGetBookingToday()
    return (
        <StyledTodayActivity>
            <Label paddingtop="normal" color="black" fs="large" fontWeight="bold">Today</Label>
            {data?.length === 0 ? <Label paddingtop="large">No activities today!</Label> : ""}
            {data?.map(booking => (
                <Activity key={booking.id} booking={booking}></Activity>

            ))}

        </StyledTodayActivity>
    )
}

export default TodayActivity