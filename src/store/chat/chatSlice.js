import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

export const getUsers = createAsyncThunk(
   'chat/getusers',
   async function(_, {rejectWithValue}) {
      try {
         const tokens = JSON.parse(localStorage.getItem('tokens'));
         const Authorization = `Bearer ${tokens.access}`;
         const config = {
            headers: {
            Authorization,
            },
         };
         const response = await axios.get(`http://server.space-hub.info/api/v1/account/users/`,config)
         console.log(response.data);
      } catch (error) {
         console.error(error);
         return rejectWithValue(error)
      }
   }
)

const chatSlice = createSlice({
   name: 'chat',
   initialState: {
      chatRooms:[],
      oneRoom: {}
   },
   reducers: {

   },
   extraReducers: builder => {
      builder.addCase(getCredits.pending, (state) => {
      console.log('pending cards');
      })
      builder.addCase(getCredits.rejected,(state) => {
      console.log(state.credits);
      console.log('error');
      });
      builder.addCase(getCredits.fulfilled, (state, { payload }) => {
      // state.cardacc.push(...payload)
      state.credits = [...payload];
      console.log('success');
      });
   }
})

const {} = chatSlice.actions

export default chatSlice.reducer