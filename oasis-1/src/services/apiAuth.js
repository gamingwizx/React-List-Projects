import supabase from "./supabase.js"

async function registerApi({email, fullname, password}) {
    const {data, error} = await supabase.auth.signUp({
        email,
        password,
    })
    if (error) throw new Error(error.message)

    return {data, error}
}

async function loginApi({email, password}) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) throw new Error(error.message)
    return {data, error}
}
export {registerApi, loginApi}
