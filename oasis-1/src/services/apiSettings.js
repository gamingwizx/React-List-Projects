import supabase from "./supabase"
export async function getSettings() {
    let query = supabase.from("settings")
    const {data, error} = await query.select("*").single()
    if (error) {
        throw new Error(error)
    }
    return data
} 

export async function updateSettings({newSettings, id}) {
    let query = supabase.from("settings")
    console.log(newSettings)
    query = query.update(newSettings).eq('id', id)
    const {data, error} = await query.select().single()
    if (error) {
        throw new Error(error)
    }
    return data
}