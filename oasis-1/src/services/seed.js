import {createSeedClient} from "@snaplet/seed"
async function main() {
    const seed = await createSeedClient({dryRun: true})

    seed.Cabins([
        {
            name: "Forest Cabin",
            description: "A cabin situated in the middle of a forest",
            price: 90,
            discount: 10,
            capacity: 5,
            image: "https://nxvxtdqarbflrhkujbbn.supabase.co/storage/v1/object/sign/cabin-images/image01.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvaW1hZ2UwMS5qcGciLCJpYXQiOjE3MzA3ODQxNDksImV4cCI6MTc2MjMyMDE0OX0.zQWK0_SctFu7EoZehNhf8B6t-iX5VS6BRBsMwS0WFTk&t=2024-11-05T05%3A22%3A30.280Z"
        }

    ])

    process.exit()
}

main()