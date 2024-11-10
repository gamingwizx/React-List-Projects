/**
 * ! Executing this script will delete all data in your database and seed it with 10 users.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const insertGuest = async () => {
  const seed = await createSeedClient({dryRun: true});
  await seed.guests([
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
  ])
}
const insertCabins = async () => {
  const seed = await createSeedClient({dryRun: true});
  await seed.cabins([
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

  ])
}

// const test1 = async(resolve, catch) => {
  
// }

const main = async () => {
  const seed = await createSeedClient({dryRun: true});
  await seed.$resetDatabase();
  
  await seed.cabins([
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

  ])

  await seed.guests([
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
  ])
  await seed.bookings([
    {
      startDate: "1731044060",
      endDate: "1731562460",
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
      startDate: "1731923660",
      endDate: "1732442060",
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
      startDate: "1732639260",
      endDate: "1732802060",
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
  ])

  await seed.settings([
    {
      minBookingLength: 1,
      maxBookingLength: 20,
      maxGuestsPerBooking: 20,
      breakfastPrice: 20
    }
  ])

  console.log("Database seeded successfully!");

  process.exit();
};

async function test() {
  const seed = await createSeedClient({dryRun: true})
  await seed.bookings([
    {
      startDate: "1731044060",
      endDate: "1731562460",
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
      startDate: "1731923660",
      endDate: "1732442060",
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
      startDate: "1732639260",
      endDate: "1732802060",
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
  ])
}

main();
// test()