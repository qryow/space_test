import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./ProfileActions";

const ProfileSlice = createSlice({
    name: 'profile',
    initialState:{
        loading: false,
        profiles: []
    },
    reducers: {},    
    extraReducers: (builder) => {
        builder
        .addCase(getProfile.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profiles = action.payload.results;
            console.log(action.payload);
        })
        .addCase(getProfile.rejected, (state) => {
            state.loading = false
        })
    },
})

export default ProfileSlice.reducer;