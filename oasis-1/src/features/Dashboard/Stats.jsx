import styled from "styled-components"
import Stat from "./Stat.jsx"
import { useState } from "react"
import { useParams } from "react-router-dom"
import useBookingByRange from "../Booking/useBookingByRange.js"
import useGetTotalSales from "../Booking/useGetTotalSales"
import useGetTotalCheckins from "../Booking/useGetTotalCheckins.jsx"
import useGetTotalCabins from "../Cabin/useGetTotalCabins.js"
import useGetTotalOccupiedCabins from "../Cabin/useGetTotalOccupiedCabins.js"
import {createGetTotalOccupiedCabins} from "../../services/apiBooking.js"
import { HiOutlineBriefcase,
    HiOutlineBanknotes,
    HiOutlineCalendarDays,
    HiOutlineChartBar
 } from "react-icons/hi2"
import Loader from "../../ui/Spinner.jsx"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate.js"
const StyledStats = styled.div`
    grid-area: stats;
    display: flex;
    gap: var(--spacing);
`

function getTotalCheckins(status) {
    const iterator = status.map((item) => item.status)
    let totalCheckins = 0
    for (const value of iterator) {
        if (value.toLowerCase() === "checked in") {
            totalCheckins += 1
        }
    }
    return totalCheckins
}

function Stats({startDate, endDate}) {

    const {data: totalOccupiedCabins, isLoading: isTotalOccupiedCabinsLoading} = useGetTotalOccupiedCabins(startDate, endDate)
    const {bookings, isLoading: isBookingLoading, error: bookingError} = useBookingByRange(startDate, endDate)
    const {totalPrice, isLoading: isCabinLoading, error: cabinError} = useGetTotalSales(startDate, endDate)
    const {data: totalCabins = 0, isLoading: isTotalCabinLoading} = useGetTotalCabins()
    const {status, error: statusError, isLoading: isTotalCheckinsLoading} = useGetTotalCheckins(startDate, endDate)

    if (isCabinLoading || isTotalCabinLoading || isTotalOccupiedCabinsLoading || isTotalCheckinsLoading) return <Loader></Loader>

    const totalSales = totalPrice.reduce((totalSales, price) => totalSales + price.totalprice, 0)
    const totalCheckins = getTotalCheckins(status)
    const occupancyRate = ((totalOccupiedCabins / totalCabins) * 100).toFixed(2)
    const {length: totalBookings = 0} = bookings

    return (
        <StyledStats>
            <Stat
                icon={<HiOutlineBriefcase/>}
                color="blue"    
                label="Bookings"
                number={totalBookings}
            />
            <Stat
                icon={<HiOutlineBanknotes/>}
                color="green"
                label="Sales"
                number={`$${totalSales}`}
            />
            <Stat
                icon={<HiOutlineCalendarDays/>}
                color="indigo"
                label="Check Ins"
                number={totalCheckins}
            />
            <Stat
                icon={<HiOutlineChartBar/>}
                color="yellow"
                label="Occupancy Rate"
                number={`${occupancyRate}%`}
            />
        </StyledStats>
    )
}
export default Stats