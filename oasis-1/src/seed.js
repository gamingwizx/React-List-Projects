import supabase from "./src/services/supabase.js"
import {useQuery} from "@tanstack/react-query"

async function main() {
  const cabins = [
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
  const {data: cabin, error: cabinError} = await supabase.from("cabins").insert(cabins).select()

  if (cabinError) {
    console.error(cabinError)
    throw new Error("Something went wrong when seeding cabins")
  }

  console.log("Successfully inserted cabins")
}
//insert parent tabl e first
//check if inserted, then only insert booking