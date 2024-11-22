import styled from "styled-components"
import Label from "../../ui/Label"
import Activity from "./Activity"
import Hr from "../../ui/Hr"
import { useEffect, useState } from "react"
import { createGetTodayBooking } from "../../services/apiBooking"
const StyledTodayActivity = styled.div`
    grid-area: todayActivity;
    background-color: white;
    border-radius: calc(var(--spacing) / 2);
    padding: calc(var(--spacing));
    overflow-y: scroll;
    height: 25rem;
`

function TodayActivity() {
    const [todayBookings, setTodayBookings] = useState([])
    useEffect(() => {
        const getTodayBooking = async () => {
            const data = await createGetTodayBooking()
            setTodayBookings(() => data)
        }
        getTodayBooking()
    }, [])
    return (
        <StyledTodayActivity>
            <Label paddingtop="normal" color="black" fs="large" fontWeight="bold">Today</Label>
            {todayBookings.map(booking => (
                <Activity key={booking.id} booking={booking}></Activity>

            ))}

        </StyledTodayActivity>
    )
}

export default TodayActivity