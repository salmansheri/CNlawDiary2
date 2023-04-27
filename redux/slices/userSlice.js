import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        id: "",
        username: "",

    },
    reducers: {
        loggedUser: (state, action) => {
            state.email = action.payload.email; 
            state.id = action.payload.id; 
            state.username = action.payload.username

        }, 
        reset: (state) => {
            state.email = ""; 
            state.id = "";  
            state.username = ""; 

            
        }
    }
})

export const {loggedUser, reset } = userSlice.actions; 

export default userSlice.reducer; 