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
      fullname: "Ng Pheng Loong",
      email: "ngpl-wm19@student.tarc.edu.my",
      nationality: "Malaysia",
      countryflag: "🇲🇾"
    },
    {
      fullname: "Ng Pheng Wei",
      email: "ngpw-19@student.tarc.edu.my",
      nationality: "Malaysia",
      countryflag: "🇲🇾"
    },
    {
      fullname: "Ng Poh Ting",
      email: "ngpt-wm19@student.tarc.edu.my",
      nationality: "Malaysia",
      countryflag: "🇲🇾"
    },
  ])
  await seed.bookings([
    {
      startdate: 1731044060,
      enddate: 1731562460,
      numnights: 5,
      numguests: 2,
      cabinprice: 200,
      extrasprice: 10,
      totalprice: 210,
      status: "Checked in",
      hasbreakfast: true,
      ispaid: true,
      observations: "Not sus at all",
      cabinid: 1,
      guestid: 1
    },
    {
      startdate: 1731923660,
      enddate: 1732442060,
      numnights: 4,
      numguests: 2,
      cabinprice: 210,
      extrasprice: 15,
      totalprice: 225,
      status: "Reserved",
      hasbreakfast: false,
      ispaid: true,
      observations: "First-time guests, requested quiet cabin.",
      cabinid: 2,
      guestid: 2
    },
    {
      startdate: 1732639260,
      enddate: 1732802060,
      numnights: 2,
      numguests: 3,
      cabinprice: 250,
      extrasprice: 20,
      totalprice: 270,
      status: "Cancelled",
      hasbreakfast: true,
      ispaid: false,
      observations: "Cancelled due to scheduling conflict.",
      cabinid: 3,
      guestid: 3
    }
  ])

  

  console.log("Database seeded successfully!");

  process.exit();
};

async function test() {
  const seed = await createSeedClient({dryRun: true})
  await seed.bookings([
    {
      startdate: 1731044060,
      enddate: 1731562460,
      numnights: 5,
      numguests: 2,
      cabinprice: 200,
      extrasprice: 10,
      totalprice: 210,
      status: "Checked in",
      hasbreakfast: true,
      ispaid: true,
      observations: "Not sus at all",
      cabinid: 1,
      guestid: 1
    },
    {
      startdate: 1731923660,
      enddate: 1732442060,
      numnights: 4,
      numguests: 2,
      cabinprice: 210,
      extrasprice: 15,
      totalprice: 225,
      status: "Reserved",
      hasbreakfast: false,
      ispaid: true,
      observations: "First-time guests, requested quiet cabin.",
      cabinid: 2,
      guestid: 2
    },
    {
      startdate: 1732639260,
      enddate: 1732802060,
      numnights: 2,
      numguests: 3,
      cabinprice: 250,
      extrasprice: 20,
      totalprice: 270,
      status: "Cancelled",
      hasbreakfast: true,
      ispaid: false,
      observations: "Cancelled due to scheduling conflict.",
      cabinid: 3,
      guestid: 3
    }
  ])
}

main();
// test()