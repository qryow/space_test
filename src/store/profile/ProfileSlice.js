import { createSlice } from "@reduxjs/toolkit";
import { editProfile, getProfile } from "./ProfileActions";

const ProfileSlice = createSlice({
    name: 'profile',
    initialState:{
        loading: false,
        error: null,
        profile: []
    },
    reducers: {},    
    extraReducers: (builder) => {
        builder
        .addCase(getProfile.pending, (state) => {
            state.loading = true;
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.profile = action.payload;
            console.log(action.payload)
        })
        .addCase(getProfile.rejected, (state) => {
            state.loading = false
        })   
        .addCase(editProfile.pending, (state) => {
          state.loading = true;
        })  
        .addCase(editProfile.fulfilled, (state, action) => {
          state.loading = false;
          console.log(action.payload)
          //action.payload.navigate('/')
        })  
        .addCase(editProfile.rejected, (state) => {
          state.loading = false;
          state.error = 'error'
        })  
    },
})

export default ProfileSlice.reducer;