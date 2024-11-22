import Table from "../../ui/Table"
import styled from "styled-components"
import Status from "../Booking/Status"
import Modal from "../../ui/Modal"
import Label from "../../ui/Label"
import {HiArrowDownOnSquare,
    HiArrowUpOnSquare,
    HiEye,
    HiTrash,
    HiEllipsisVertical} from "react-icons/hi2"
import Menu from "../../ui/Menu"
import { useNavigate } from "react-router-dom"
import CalculateDuration from "../../utils/CalculateDuration"
import GetDurationStatus from "../../utils/GetDurationStatus"
import FormatTimestampToDate from "../../utils/FormatTimestampToDate"
function BookingRow({data}) {
    const {
        cabins,
        enddate,
        guests,
        id,
        startdate,
        status,
        totalprice
        } = data;
    const navigate = useNavigate()
    const bookingDays = CalculateDuration(startdate, enddate)
    const startDate = FormatTimestampToDate(startdate)
    const endDate = FormatTimestampToDate(enddate)
    const statusColor = () => {
        switch(status.toUpperCase()) {
            case "CHECKED IN":
                return "green"
                break;
           case "RESERVED":
               return "yellow"
               break;
            case "CANCELLED":
                return "red"
                break;
            case "UNCOMFIRMED":
                return "blue"
                break;
        }
    }
    const handleSeeDetails = (e) => {
        navigate(`/home/booking/${id}`)
    }
    const handleDeleteBookings = (e) => {

    }
    return (
        <Table.Row>
            <Table.Cell>{cabins.id?.toString().padStart(3, "0")}</Table.Cell>
            <Table.Cell stacked="stacked" secondRow={guests.email}>{guests.fullname}</Table.Cell>
            <Table.Cell stacked="stacked" secondRow={`${startDate} ➜ ${endDate}`}>{GetDurationStatus(startdate)} ➜ {bookingDays} night stay</Table.Cell>
            <Table.Cell><Status color={statusColor()}>{status}</Status></Table.Cell>
            <Table.Cell>${totalprice.toFixed(2)}</Table.Cell>
            <Table.Cell>
                <Menu>
                    <Menu.Toggle icon={<HiEllipsisVertical />}>
                    </Menu.Toggle>
                    <Menu.List>
                        <Menu.Button onClick={handleSeeDetails}>
                            <HiEye />
                            <Label>See Details</Label>
                        </Menu.Button>
                        <Menu.Button onClick={handleDeleteBookings}>
                            <HiTrash />
                            <Label>Delete Bookings</Label>
                        </Menu.Button>
                    </Menu.List>
                </Menu>
                </Table.Cell>
        </Table.Row>
     
    )
}

export default BookingRow