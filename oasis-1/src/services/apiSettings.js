import supabase from "./supabase"
export async function getSettings() {
    let query = supabase.from("settings")
    const {data, error} = await query.select("*").single()
    console.log(data)
    if (error) {
        throw new Error(error)
    }
    return data
} 

export async function updateSettings({newSettings}) {

    let query = supabase.from("settings")
    query = query.update(newSettings).eq('id', newSettings?.id)
    const {data, error} = await query.select().single()
    if (error) {
        console.log(error)
        throw new Error(error)
    }
    return data
}