import adminSupabase from "./adminSupabase.js"


export const insertCabins = async () => {
    const cabinsData = [
      {
          name: "Forest Cabin",
          description: "A cabin situated in the middle of a forest",
          price: 90,
          discount: 10,
          capacity: 5,
          image: "https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z"
      },
      {
          name: "Rain Forest Cabin",
          description: "A cabin situated in the middle of a rain forest",
          price: 150,
          discount: 20,
          capacity: 3,
          image: "https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image02.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z"
      },
      {
          name: "Desert Cabin",
          description: "A cabin situated in the middle of a desert",
          price: 50,
          discount: 10,
          capacity: 2,
          image: "https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image03.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z"
      },
    ]
  const {data: cabins, error: cabinError} = await adminSupabase.from("cabins").insert(cabinsData).select()
  console.log("Successfully inserted cabins")
  return {cabins, cabinError}
  }
  export const insertGuests = async  () => {
    const guestsData = [
        {
            fullName: "Ng Pheng Loong",
            email: "ngpl-wm19@student.tarc.edu.my",
            nationality: "Malaysia",
            countryFlag: "🇲🇾"
          },
          {
            fullName: "Ng Pheng Wei",
            email: "ngpw-19@student.tarc.edu.my",
            nationality: "Malaysia",
            countryFlag: "🇲🇾"
          },
          {
            fullName: "Ng Poh Ting",
            email: "ngpt-wm19@student.tarc.edu.my",
            nationality: "Malaysia",
            countryFlag: "🇲🇾"
          },
    ]
  const {data: guests, error: guestError} = await adminSupabase.from("guests").insert(guestsData).select()
  console.log("Successfully inserted guests")
  return {guests, guestError}
  }
  export const insertBookings = async () => {
    const bookingsData = [
      {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        numNights: 5,
        numGuests: 2,
        cabinPrice: 200,
        extrasPrice: 10,
        totalPrice: 210,
        status: "Checked in",
        hasBreakfast: true,
        isPaid: true,
        observations: "Not sus at all",
        cabinId: 1,
        guestid: 1
      },
      {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        numNights: 4,
        numGuests: 2,
        cabinPrice: 210,
        extrasPrice: 15,
        totalPrice: 225,
        status: "Reserved",
        hasBreakfast: false,
        isPaid: true,
        observations: "First-time guests, requested quiet cabin.",
        cabinId: 2,
        guestid: 2
      },
      {
        startDate: new Date().toISOString(),
        endDate: new Date().toISOString(),
        numNights: 2,
        numGuests: 3,
        cabinPrice: 250,
        extrasPrice: 20,
        totalPrice: 270,
        status: "Cancelled",
        hasBreakfast: true,
        isPaid: false,
        observations: "Cancelled due to scheduling conflict.",
        cabinId: 3,
        guestid: 3
      }
    ]
  
    const {data: bookings, error: bookingError} = await adminSupabase.from("bookings").insert(bookingsData).select()
    console.log("Successfully inserted bookings")
    return {bookings, bookingError}
  }

  export const insertSettings = async() => {
    const settingsData = 
        {
          minBookingLength: 1,
          maxBookingLength: 20,
          maxGuestsPerBooking: 20,
          breakfastPrice: 20
        }
    const {data: settings, error: settingsError} = await adminSupabase.from("settings").insert(settingsData).select()
    console.log("Successfully inserted settings")
    return {settings, settingsError}

  }

  export const deleteAllData = async() => {
    await adminSupabase.from("settings").delete().neq("id", 0)
    await adminSupabase.from("guests").delete().neq("id", 0)
    await adminSupabase.from("cabins").delete().neq("id", 0)
    await adminSupabase.from("cabins").delete().neq("id", 0)
  }