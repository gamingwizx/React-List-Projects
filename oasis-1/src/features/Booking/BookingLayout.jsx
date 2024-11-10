import styled from "styled-components"
import BookingRow from "./BookingRow"
import Table from "../../ui/Table"
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

    const bookingData = [{
        "cabin": "007",
        "guest": "Fatimah",
        "email": "fatimah@gmail.com",
        "duration": "in 15 days -> 6 night stay",
        "dates": "Jun 01 2023 - Jun 07 2023",
        "status": "Checked In",
        "amount": "3,720",
    },
    {
        "cabin": "007",
        "guest": "Fatimah",
        "email": "fatimah@gmail.com",
        "duration": "in 15 days -> 6 night stay",
        "dates": "Jun 01 2023 - Jun 07 2023",
        "status": "Checked In",
        "amount": "3,720",
    },{
        "cabin": "007",
        "guest": "Fatimah",
        "email": "fatimah@gmail.com",
        "duration": "in 15 days -> 6 night stay",
        "dates": "Jun 01 2023 - Jun 07 2023",
        "status": "Checked In",
        "amount": "3,720",
    },{
        "cabin": "007",
        "guest": "Fatimah",
        "email": "fatimah@gmail.com",
        "duration": "in 15 days -> 6 night stay",
        "dates": "Jun 01 2023 - Jun 07 2023",
        "status": "Checked In",
        "amount": "3,720",
    }]

    return (
        <Table>
            <Table.Header>
                <th>Cabin</th>
                <th>Guest</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Amount</th>
            </Table.Header>
            {bookingData.map((booking) => (
                <BookingRow data={booking}></BookingRow>
            ))}
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