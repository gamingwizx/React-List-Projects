import supabase from "./supabase.js"

export async function getBooking() {
    const {data, error} = await supabase.from("bookings").select("id, status, observations, guests(email, fullname), startdate, enddate, numnights, cabinprice, extrasprice, totalprice, hasbreakfast, ispaid, cabins(id)", {count: "exact"})

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

export async function createGetTotalSales() {
    const {data, error} = await supabase.from("bookings").select("totalprice")
    if (error) {
        console.error(error)
    }
    return data
  }

export async function createGetTotalCheckins() {
    const {data, error} = await supabase.from('bookings').select("status")
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalOccupiedCabins(startdate, enddate) {
    const {data, error} = await supabase.rpc("check_if_today_between_start_and_end_date", {startdate, enddate})
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

export async function createGetSummaryNights() {
    const {data, error} = await supabase.rpc("get_summary_numnights")
    if (error) {
        console.error(error)
    }
    return data
}

export async function createGetTotalSalesPerDayForPeriod(startdate, enddate) {
    const {data, error} = await supabase.rpc("testing", {
        'query_startdate': startdate,
        'query_enddate': enddate
    })
    if (error) {
        console.error(error)
    }
    return data
}

export async function createCheckIn(updatedBooking) {
    console.log(updatedBooking)
    const {data, error} = await supabase.from("bookings").update({status: updatedBooking.status}).eq('id', updatedBooking.id)
    if (error) {
        console.error(error)
    }
    return data
}