import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAddress } from "../../services/apiUser"
const getPosition = async() => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}
export const getCurrentPosition = createAsyncThunk(
    "user/getPositon",
    async function() {
        const positionObj = await getPosition()
        const location = {
            lattitude: positionObj.coords.lattitude,
            longitude: positionObj.coords.longitude
        }
        const addressObj = await getAddress(location)
        const address = `${addressObj.locality} ${addressObj.city} ${addressObj.postcode} ${addressObj.countryName}`
        return {address, location}
    }
)
const initialState = {
    username: ""
}
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerUser(state, action){
            state.username = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCurrentPosition.fulfilled, (state, action) => {
            state.address = action.payload.address
            state.location = action.payload.location
        })
    }
})

export const {registerUser} = userSlice.actions
export default userSlice.reducer