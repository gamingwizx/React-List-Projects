import styled from "styled-components"
import BookingOptions from "./CheckoutStatusFilter"
import SortByFilterDropdown from "./SortByFilterDropdown"

const StyledBookingHeader = styled.div`
    display: flex;
    gap: var(--spacing);
`

function BookingHeader() {
    return (
        <StyledBookingHeader>
            <BookingOptions/>
            <SortByFilterDropdown/>
        </StyledBookingHeader>
    )
}

export default BookingHeader