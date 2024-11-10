import styled from "styled-components"
import Label from "../../ui/Label"
import Activity from "./Activity"
import Hr from "../../ui/Hr"
const StyledTodayActivity = styled.div`
    grid-area: todayActivity;
    background-color: white;
    border-radius: calc(var(--spacing) / 2);
    padding: calc(var(--spacing));
    overflow-y: scroll;
    height: 25rem;
`

function TodayActivity() {
    return (
        <StyledTodayActivity>
            <Label paddingtop="normal" color="black" fs="large" fontWeight="bold">Today</Label>
            <Activity></Activity>
            <Activity></Activity>
            <Activity></Activity>
            <Activity></Activity>
            <Activity></Activity>
            <Activity></Activity>
        </StyledTodayActivity>
    )
}

export default TodayActivity