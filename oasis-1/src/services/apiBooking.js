import capitalizeFirstLetter from "../utils/CapitalizeFirstLetter.js"
import supabase from "./supabase.js"

// export async function getBooking() {
//     const {data, error} = await supabase.from("bookings").select("id, status, observations, guests(email, fullname), startdate, enddate, numnights, cabinprice, extrasprice, totalprice, hasbreakfast, ispaid, cabins(id)", {count: "exact"})

//     if (error) {
//         console.error(error)
//     }
//     return data
// }

export async function getBookingByRange({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    let query = supabase.from("bookings").select("id, status, observations, guests(email, fullname), startdate, enddate, numnights, cabinprice, extrasprice, totalprice, hasbreakfast, ispaid, cabins(id)", {count: "exact"})
    query = query.gte("created_at", startDate).lte("created_at", endDate)
    const {data, error} = await query.select()
    if (error) {
        console.error(error)
    }
    return data
}

export async function getBooking({sortBy, filterBy, page, pageSize = 5}) {
    let query = supabase.from("bookings").select("id, status, observations, guests(email, fullname), startdate, enddate, numnights, cabinprice, extrasprice, totalprice, hasbreakfast, ispaid, cabins(id)", {count: "exact"})

    if (sortBy) {
        
        const field = sortBy[0]
        const value = sortBy[1]
        query = query.order(field, { ascending: value === "asc"})
    }
    if (filterBy) {
        const value = capitalizeFirstLetter(filterBy.join(" "))
        query = query.eq("status", value)

    }

    if (page) {
        const from = (page - 1) * Number(pageSize);
        const to = from + Number(pageSize);
        query = query.range(from, to)
    }
    const {data, error} = await query
    if (error) {
        console.error(error)
    }

    return data
}

export async function getBookingCount() {
    const {data, error} = await supabase.rpc("get_booking_count")
    if (error) {
        console.error(error)
    }
    return data
}

export async function getBookingDetail(id) {
    const {data, error} = await supabase.from("bookings").select("id, status, observations, guests(email, fullname), startdate, enddate, numnights, cabinprice, extrasprice, totalprice, hasbreakfast, ispaid, cabins(id), created_at").eq("id", Number(id)).maybeSingle()
    if (error) {
        console.error(error)
    }
    return data
}

export async function getBookingStatus(id) {
    const {data, error} = await supabase.from("bookings").select("status").eq("id", Number(id)).maybeSingle()
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalSales({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    let query = supabase.from("bookings").select("totalprice")
    query = query.gte("created_at", startDate).lte("created_at", endDate)
    const {data, error} = await query.select()
    if (error) {
        console.error(error)
    }
    return data
  }

export async function createGetTotalCheckins({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    let query = supabase.from('bookings').select("status")
    query = query.gte("created_at", startDate).lte("created_at", endDate)
    const {data, error} = await query.select()
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalOccupiedCabins({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    const {data, error} = await supabase.rpc("check_if_today_between_start_and_end_date", {start_date: startDate, end_date: endDate})
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTodayBooking() {
    const {data, error} = await supabase.rpc("get_booking_today")
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetSummaryNights({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    const {data, error} = await supabase.rpc("get_summary_numnights", {start_date: startDate, end_date: endDate})
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalSalesPerDayForPeriod({queryKey}) {
    const startDate = queryKey[2]
    const endDate = queryKey[1]
    const {data, error} = await supabase.rpc("testing", {
        'query_startdate': startDate,
        'query_enddate': endDate
    })
    if (error) {
        console.error(error)
    }
    return data
}

export async function createCheckIn(updatedBooking) {
    const {data, error} = await supabase.from("bookings").update({status: updatedBooking.status}).eq('id', updatedBooking.id)
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetBookingSortByEarliestDate() {
    const {data, error} = await supabase.from("bookings").select("*").order("startdate", { ascending: true })
    if (error) {
        console.error(error)
    }
    return data
}

export async function createDeleteBooking(id) {
    const {data, error} = await supabase.from("bookings").delete().eq('id', id).select()
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalBookings() {
    const {data, error} = await supabase.rpc("get_booking_count")

    if (error) {
        console.error(error)
    }
    return data
}