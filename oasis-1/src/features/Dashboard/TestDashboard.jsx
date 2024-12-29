// import { FilterBody, FilterOption } from "../../ui/Filter";
// import styled from "styled-components"
// import Stat from "./Stat.jsx"
// import { useState } from "react"
// import useBooking from "../Booking/useBookings.js"
// import useGetTotalSales from "../Booking/useGetTotalSales"
// import useGetTotalCheckins from "../Booking/useGetTotalCheckins.jsx"
// import useGetTotalCabins from "../Cabin/useGetTotalCabins.js"
// import useGetTotalOccupiedCabins from "../Cabin/useGetTotalOccupiedCabins.js"
// import {createGetTotalOccupiedCabins} from "../../services/apiBooking.js"
// import { HiOutlineBriefcase,
//     HiOutlineBanknotes,
//     HiOutlineCalendarDays,
//     HiOutlineChartBar
//  } from "react-icons/hi2"
// import Loader from "../../ui/Spinner.jsx"
// import { useEffect } from "react"
// import FormatTimestampToFormattedStringDate from "../../utils/FormatTimestampToFormattedStringDate";
// const StyledStats = styled.div`
//     grid-area: stats;
//     display: flex;
//     gap: var(--spacing);
// `
// function getTotalCheckins(status) {
//     const iterator = status.map((item) => item.status)
//     let totalCheckins = 0
//     for (const value of iterator) {
//         if (value.toLowerCase() === "checked in") {
//             totalCheckins += 1
//         }
//     }
//     return totalCheckins
// }
// export default function TestDashboard() {
//     let startDate = new Date()
//     let testEndDate = new Date()
//     testEndDate.setDate(testEndDate.getDate() - 7)
//     const [endDate, setEndDate] = useState(() => FormatTimestampToFormattedStringDate(testEndDate))
//     startDate = FormatTimestampToFormattedStringDate(startDate)
//     const FIRST_FILTER = "7 days"
//     const SECOND_FILTER = "30 days"
//     const handleFilterDuration = (duration) => {
//         const to = new Date()
//         switch(duration) {
//             case FIRST_FILTER:
//                 to.setDate(to.getDate() - 7)
//                 break;
//             case SECOND_FILTER:
//                 to.setDate(to.getDate() - 30)
//                 break;
                    
//                 }
//         setEndDate(() => FormatTimestampToFormattedStringDate(to))
//     }
//     const {data: totalOccupiedCabins, isLoading: isTotalOccupiedCabinsLoading} = useGetTotalOccupiedCabins(startDate, endDate)
//     const {bookings, isLoading: isBookingLoading, error: bookingError} = useBooking(startDate, endDate)
//     const {totalPrice, isLoading: isCabinLoading, error: cabinError} = useGetTotalSales(startDate, endDate)
//     const {data: {length: totalCabins} = {}, isLoading: isTotalCabinLoading} = useGetTotalCabins()
//     const {status, error: statusError, isLoading: isTotalCheckinsLoading} = useGetTotalCheckins(startDate, endDate)
    
//     if (isCabinLoading || isTotalCabinLoading || isTotalOccupiedCabinsLoading || isTotalCheckinsLoading) return <Loader></Loader>
//     const totalSales = totalPrice.reduce((totalSales, price) => totalSales + price.totalprice, 0)
//     const totalCheckins = getTotalCheckins(status)
//     const occupancyRate = ((totalOccupiedCabins / totalCabins) * 100).toFixed(2)
//     const {length: totalBookings = 0} = bookings

//     return (
//         <>
//         <FilterBody>
//             <FilterOption onClick={() => handleFilterDuration(FIRST_FILTER)}>
//                 Last 7 days
//             </FilterOption>
//             <FilterOption onClick={() => handleFilterDuration(SECOND_FILTER)}>
//                 Last 30 days
//             </FilterOption>
//             <FilterOption>
//                 Last 90 days
//             </FilterOption>
//         </FilterBody>
//         <StyledStats>
//             <Stat
//                 icon={<HiOutlineBriefcase/>}
//                 color="blue"    
//                 label="Bookings"
//                 number={totalBookings}
//             />
//             <Stat
//                 icon={<HiOutlineBanknotes/>}
//                 color="green"
//                 label="Sales"
//                 number={`$${totalSales}`}
//             />
//             <Stat
//                 icon={<HiOutlineCalendarDays/>}
//                 color="indigo"
//                 label="Check Ins"
//                 number={totalCheckins}
//             />
//             <Stat
//                 icon={<HiOutlineChartBar/>}
//                 color="yellow"
//                 label="Occupancy Rate"
//                 number={`${occupancyRate}%`}
//             />
//         </StyledStats>
//         </>
        
//     )
// }