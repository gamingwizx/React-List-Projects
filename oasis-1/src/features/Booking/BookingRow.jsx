import Table from "../../ui/Table"
import styled from "styled-components"
import Status from "../Booking/Status"
function BookingRow({data}) {
    const {cabin, guest, email, duration, dates, status, amount} = data
    return (
        <Table.Row>
            <Table.Cell>{cabin}</Table.Cell>
            <Table.Cell stacked="stacked" secondRow={email}>{guest}</Table.Cell>
            <Table.Cell stacked="stacked" secondRow={dates}>{duration}</Table.Cell>
            <Table.Cell><Status color="green">{status}</Status></Table.Cell>
            <Table.Cell>{amount}</Table.Cell>
               {/* <Status padding="small" color="green">{status}</Status> */}
        </Table.Row>
     
    )
}

export default BookingRow