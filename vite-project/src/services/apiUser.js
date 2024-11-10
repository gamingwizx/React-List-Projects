const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

export async function getAddress({latitude, longitude}) {
    const res = await fetch(`${BASE_URL}?latitude=${latitude}&longitude=${longitude}`)
    if (!res.ok) throw new Error("Something went wron when fetching address")
    const data = await res.json()
    return data
}