import supabase from "./supabase.js"
import {createClient} from "@supabase/supabase-js" 
import { SUPABASE_URL, SUPABASE_API_KEY } from "./supabase.js"
import toast from "react-hot-toast"

async function registerApi({email, fullName: fullname, password}) {

    const {data, error} = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
            fullname
        }
    }
    })
    if (error) {
        console.error(error)
        throw new Error(error.message)
    }   
    return {data, error}
}

async function loginApi({email, password}) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) throw new Error(error.message)
        console.log(data)
    return {data, error}
}

async function createUpdateUserInfo({email, fullname, filename, file, id}) {


    const {data: {filename: previousAvatarImageUrl} = {}, error: filenameError} = await supabase.from("profiles").select("filename").eq("id", id).single()
    const previousAvatarImage = previousAvatarImageUrl.split("/")[previousAvatarImageUrl.split("/").length - 1]
    const {error: removePreviousAvatarImageError} = await supabase.storage.from("avatar-images").remove([previousAvatarImage])
    
    const updatedAvatarImageName = `${Math.random()}-${filename}`
    // const updatedAvatarImageUrl = `${SUPABASE_URL}/storage/v1/object/authenticated/avatar-images/${updatedAvatarImageName}`
    const {data: updatedUser, error: updateUserError} = await supabase.auth.updateUser({
        email: email,
        data: {fullname, filename: updatedAvatarImageName, id}
    })
    const {error: storageError} = await supabase.storage.from("avatar-images").upload(updatedAvatarImageName, file)
    
    if (filenameError) {
        console.error(filenameError)
    }

    if (removePreviousAvatarImageError) {
        console.error(removePreviousAvatarImageError)
    }
    
    if (updateUserError){
        console.error(error)
    }
    if (storageError) {
        console.error(storageError)
    }
    return updatedUser
}

async function createRetrieveUserInfo() {
    
    const query = await supabase.auth.getSession();
    const {data: {session: {user: {user_metadata, id} = {}}}, error} = query
    if (error) {
        console.error(error)
    }
    return {user_metadata, id}
}
async function createGetAvatarImage({queryKey}) {
    const imagename = queryKey[1]
    const {data, error} = await supabase.storage.from("avatar-images").createSignedUrl(imagename, 3600)
    if (error) {
        console.error(error)
    }
    return data
}
async function createRequestChangePassword(email) {
    const {data, error} = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/home/auth/update',
      })
      if (error) {
        console.error(error)
      }
      return data
}
async function createChangePassword(newPassword) {
    const initiateUpdatePassword = async() => {
        const {data, error} = await supabase.auth.updateUser({ password: newPassword })
        if (error) {
            throw error
        }
        return data
    }
    initiateUpdatePassword().then(data => {
        toast.success("Successfully updated password!")
        return data
    }).catch(error => {
        console.log(JSON.stringify(error))
        const {name, code} = error
        if (name == "AuthWeakPasswordError" && code === "weak_password") {
            toast.error("Password must be more than 6 characters")
        } else if (name == "AuthApiError" && code === "same_password") {
            toast.error("Password is the same as the previous one!")
        }
    })
}
export {registerApi, loginApi, createUpdateUserInfo, createRetrieveUserInfo, createGetAvatarImage, createChangePassword, createRequestChangePassword}