/**
 * ! Executing this script will delete all data in your database and seed it with 10 users.
 * ! Make sure to adjust the script to your needs.
 * Use any TypeScript runner to run this script, for example: `npx tsx seed.ts`
 * Learn more about the Seed Client by following our guide: https://docs.snaplet.dev/seed/getting-started
 */
import { createSeedClient } from "@snaplet/seed";

const main = async () => {
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

  // Type completion not working? You might want to reload your TypeScript Server to pick up the changes

  console.log("Database seeded successfully!");

  process.exit();
};

main();