import styled from "styled-components"
import BookingRow from "./BookingRow"
import Table from "../../ui/Table"
import useBooking from "./useBookings"
import Empty from "../../ui/Empty"
import useGetBookingSortByEarliestDate from "./useGetBookingSortByEarliestDate"
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

function BookingLayout({bookings}) {
    
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
                <BookingRow key={booking.id} id={booking.id} data={booking}></BookingRow>
            )} id="bookingBody">

            </Table.Body>
        </Table>
    )
}


export default BookingLayout