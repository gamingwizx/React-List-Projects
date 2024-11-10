import styled from "styled-components"
import BookingLayout from "./BookingLayout"
const StyledBooking = styled.div`
    display: flex;
`

function Booking() {
    return (
        <StyledBooking>
            <BookingLayout/>
        </StyledBooking>
    )
}

export default Booking