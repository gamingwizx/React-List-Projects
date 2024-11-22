import styled from "styled-components"
import BookingRow from "./BookingRow"
import Table from "../../ui/Table"
import useBooking from "./useBookings"
import Loader from "../../ui/Spinner"
import Empty from "../../ui/Empty"
const StyledBookingLayout = styled.table`
    border-collapse: collapse;
    box-shadow: 0.8px 2px 5px 0.8px var(--bg-gray-400);
    width: 100%;
    & tr {
    }

    & th:first-child {
    text-align: center;
    }
    & th {
        text-align: left;
        background-color: var(--bg-gray-200);
        padding: calc(var(--spacing)) 0;
        text-transform: uppercase;
        font-weight: 700;
    }
    & td:first-child {
        text-align: center;
    }
    & td {
        padding: calc(var(--spacing)) 0;
    }
`

function BookingLayout() {

    const {bookings, isLoading, error} = useBooking()
    if (isLoading) return <Loader></Loader>
    if (!bookings.length) return <Empty resourceName="booking" />;
    return (
        <Table id="booking">
            <Table.Header id="bookingHeader">
                <th>Cabin</th>
                <th>Guest</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Amount</th>
                <th></th>
            </Table.Header>
            <Table.Body data={bookings} render={(booking) => (
                <BookingRow id={booking.id} data={booking}></BookingRow>
            )} id="bookingBody">

            </Table.Body>
        </Table>
        // <StyledBookingLayout>
        //     <tr>
        //         <th>Cabin</th>
        //         <th>Guest</th>
        //         <th>Dates</th>
        //         <th>Status</th>
        //         <th>Amount</th>
        //     </tr>
        //     <tr>
        //         <td>007</td>
        //         <td>Fatimah Al-Sayed</td>
        //         <td>In 15 days - 6  night stay</td>
        //         <td>Checked In</td>
        //         <td>$3,720</td>
        //     </tr>
        // </StyledBookingLayout>
    )
}


export default BookingLayout