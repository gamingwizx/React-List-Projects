import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: ""
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser(state, action) {
            state.username = action.payload
        }
    },
})

export const {createUser} = UserSlice.actions
export default UserSlice.reducer