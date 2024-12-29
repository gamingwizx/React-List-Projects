import styled from "styled-components"
// import BookingOptions from "./CheckoutStatusFilter"
import SortByFilterDropdown from "./SortByFilterDropdown"
import Filter from "../../ui/Filter"

const StyledBookingHeader = styled.div`
    display: flex;
    gap: var(--spacing);
`

function BookingHeader() {
    const options = [
        {value: "all", label: "All"},
        {value: "checked-out", label: "Check Out"},
        {value: "checked-in", label: "Check In"},
        {value: "unconfirmed", label: "Unconfirmed"},
        {value: "cancelled", label: "Cancelled"}
    ]
    const filterKey = "filterBy"
    return (
        <StyledBookingHeader>
            <Filter options={options} filterKey={filterKey}/>
            <SortByFilterDropdown/>
        </StyledBookingHeader>
    )
}

export default BookingHeader