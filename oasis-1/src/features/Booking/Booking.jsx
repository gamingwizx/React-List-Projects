import styled from "styled-components"
import BookingLayout from "./BookingLayout"
import BookingHeader from "./BookingHeader"
import Label from "../../ui/Label"
import ContentHeader from "../../ui/ContentHeader"
import Page1 from "../../ui/Page1"
import useBooking from "./useBookings"
import Loader from "../../ui/Spinner"
import Empty from "../../ui/Empty"
import useGetTotalBookings from "./useGetTotalBookings"
const StyledBooking = styled.div`
    display: flex;
    flex-direction: column;
`

function Booking() {
    const {bookings, isLoading} = useBooking()
    const {data: totalBookings, isLoading: isTotalBookingsLoading} = useGetTotalBookings()
    if (isLoading) return <Loader></Loader>
    if (!bookings?.length) return <Empty resourceName="booking" />;

    return (
        <StyledBooking>
            <ContentHeader>
                <Label fs="verylarge" fw="bold">All Bookings</Label>
                <BookingHeader />
            </ContentHeader>
            <BookingLayout bookings={bookings}/>
            <Page1 visibleRange={5} numRecords={totalBookings}></Page1>
        </StyledBooking>
    )
}

export default Booking