import styled from "styled-components"
import BookingLayout from "./BookingLayout"
import BookingHeader from "./BookingHeader"
import Label from "../../ui/Label"
import ContentHeader from "../../ui/ContentHeader"
import Page1 from "../../ui/Page1"
import useBooking from "./useBookings"
import Loader from "../../ui/Spinner"
import Empty from "../../ui/Empty"
import FilterAndSelect from "../../ui/FilterAndSelect"
import useGetTotalBookings from "./useGetTotalBookings"
const StyledBooking = styled.div`
    display: flex;
    flex-direction: column;
`

function Booking() {
    const {bookings, isLoading} = useBooking()
    const {data: totalBookings, isLoading: isTotalBookingsLoading} = useGetTotalBookings()

    const filterKey = "filterBy"

    const sortOptions = [
        {value: 'startdate-asc', label: 'Sort by date (earlier first)'},
        {value: 'startdate-desc', label: 'Sort by date (high first)'},
        {value: 'totalprice-asc', label: 'Sort by amount (low first)'},
        {value: 'totalprice-desc', label: 'Sort by amount (high first)'}
    ]
    const selectLabel = "Sort by date (recent first)"

    const options = [
        {value: "all", label: "All"},
        {value: "checked-out", label: "Check Out"},
        {value: "checked-in", label: "Check In"},
        {value: "unconfirmed", label: "Unconfirmed"},
        {value: "cancelled", label: "Cancelled"}
    ]

    if (isLoading && isTotalBookingsLoading) return <Loader></Loader>
    

    return (
        <StyledBooking>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Bookings</Label>
                <FilterAndSelect sortOptions={sortOptions} filterOptions={options} filterKey={filterKey}/>
            </ContentHeader>
            <BookingLayout bookings={bookings}/>
            <Page1 visibleRange={5} numRecords={totalBookings}></Page1>
        </StyledBooking>
    )
}

export default Booking