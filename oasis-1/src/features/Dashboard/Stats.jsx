import styled from "styled-components"
import Stat from "./Stat.jsx"
import { HiOutlineBriefcase,
    HiOutlineBanknotes,
    HiOutlineCalendarDays,
    HiOutlineChartBar
 } from "react-icons/hi2"
const StyledStats = styled.div`
    grid-area: stats;
    display: flex;
    gap: var(--spacing);
`

function Stats() {
    return (
        <StyledStats>
            <Stat
                icon={<HiOutlineBriefcase/>}
                color="blue"    
                label="Bookings"
                number="11"
            />
            <Stat
                icon={<HiOutlineBanknotes/>}
                color="green"
                label="Sales"
                number="$33,285.00"
            />
            <Stat
                icon={<HiOutlineCalendarDays/>}
                color="indigo"
                label="Check Ins"
                number="6"
            />
            <Stat
                icon={<HiOutlineChartBar/>}
                color="yellow"
                label="Occupancy Rate"
                number="48%"
            />
        </StyledStats>
    )
}
export default Stats