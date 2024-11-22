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

export async function createGetTotalOccupiedCabins() {
    const {data, error} = await supabase.rpc("check_if_today_between_start_and_end_date")
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