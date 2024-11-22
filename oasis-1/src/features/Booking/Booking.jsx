import styled from "styled-components"
import BookingLayout from "./BookingLayout"
import BookingHeader from "./BookingHeader"
import Label from "../../ui/Label"
import ContentHeader from "../../ui/ContentHeader"
const StyledBooking = styled.div`
    display: flex;
    flex-direction: column;
`

function Booking() {
    return (
        <StyledBooking>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Bookings</Label>
                <BookingHeader />
            </ContentHeader>
            <BookingLayout/>
        </StyledBooking>
    )
}

export default Booking