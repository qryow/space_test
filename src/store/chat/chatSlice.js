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
         const response = await axios.get(`https://server.space-hub.info/api/v1/account/users/`,config)
         console.log(response.data);
      } catch (error) {
         console.error(error);
         return rejectWithValue(error)
      }
   }

)

export const getRooms = createAsyncThunk(
   'card/getrooms',
   async function (_, { rejectWithValue }) {
     try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
       const response = await axios.get(`https://server.space-hub.info/api/v1/chat/chatrooms/`,config);
       // if (!response) {
       //   throw new Error('Server Error');
       // }
       console.log(response);
 
       const data = await response.data
       return data;
 
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );

export const addPrivateChatRoom = createAsyncThunk(
   'chat/addchatroom',
   async function (
      {
         title,
         particip
      },
   {rejectWithValue,dispatch}
   ) {
      try {
         const tokens = JSON.parse(localStorage.getItem('tokens'));
         const Authorization = `Bearer ${tokens.access}`;
         const config = {
           headers: {
             Authorization,
             'Content-Type': 'application/json'
           },
         };
      //    let formData = new FormData();
      // formData.append("title", "123");
      // formData.append("participants", [2,6]);
      let room = {
        "title": title,
        "participants": particip
     }
      console.log(room);
           // await createChatRoom(formData)
           console.log('created');
           // console.log(formData);
      const response = await  axios.post(
         `https://server.space-hub.info/api/v1/chat/chatrooms/`,
         room,
         config
         );
         console.log(response);
         const data = await  response.json()
         dispatch(addingPrivateChatRoom(data))
         return response.data
      } catch (error) {
         
      }
   }
)

const chatSlice = createSlice({
   name: 'chat',
   initialState: {
      privateChatRooms:[],
      onePrivateRoom: {},
   },
      reducers: {
         addingPrivateChatRoom(state,action) {
            state.privateChatRooms.push(action.payload)
            state.response.push(action.payload)
         }
      },
   extraReducers: builder => {
      builder.addCase(getRooms.pending, (state) => {
      console.log('pending cards');
      })
      builder.addCase(getRooms.rejected,(state) => {
      console.log(state.privateChatRooms);
      console.log('error');
      });
      builder.addCase(getRooms.fulfilled, (state, { payload }) => {
      state.privateChatRooms = [payload]; 
      });
      builder.addCase(addPrivateChatRoom.pending, (state) => {
         console.log('pending addPrivateChatRoom');
       });
       builder.addCase(addPrivateChatRoom.rejected, (state) => {
         console.log('error addPrivateChatRoom');
       });
       builder.addCase(addPrivateChatRoom.fulfilled, (state, { payload }) => {
         // state.privateChatRooms.push(payload);
         state.privateChatRooms.push(payload);
         console.log('success addPrivateChatRoom');
       });
   },
})

const {addingPrivateChatRoom} = chatSlice.actions

export default chatSlice.reducer