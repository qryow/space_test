import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { useEffect } from "react";

export const getChatUsers = createAsyncThunk(
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
         const response = await axios.get(`https://server.space-hub.info/api/v1/profile/profile/`,config)
         console.log(response.data);
         return response.data;
      } catch (error) {
         console.error(error);
         return rejectWithValue(error)
      }
   }

)

export const getRooms = createAsyncThunk(
   'chat/getrooms',
   async function (_, { rejectWithValue }) {
     try {
      const tokens = JSON.parse(localStorage.getItem('tokens'));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      
      let apiUrl = "https://server.space-hub.info/api/v1/chat/chatrooms/";
      let allResults = [];
      
      while (apiUrl) {
        const response = await axios.get(apiUrl, config);
        const data = await response.data;

        const results = data.results;

        // Concatenate the results to the array
        allResults = allResults.concat(results);

        // Check if there is a next page
        apiUrl = data.next;
      }

      console.log(allResults);

      return allResults;
 
     } catch (error) {
       console.log(error);
       return rejectWithValue(error);
     }
   }
 );
 export const getOneRoom = createAsyncThunk(
  'chat/getoneroom',
  async function (id, { rejectWithValue }) {
    try {
     const tokens = JSON.parse(localStorage.getItem('tokens'));
     const Authorization = `Bearer ${tokens.access}`;
     const config = {
       headers: {
         Authorization,
       },
     };
      const response = await axios.get(`https://server.space-hub.info/api/v1/chat/chatrooms/${id}`,config);
      // if (!response) {
      //   throw new Error('Server Error');
      // }
      console.log(response);
      console.log('one room received');

      const data = await response.data
      return data;

    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
 export const getOneChatUser = createAsyncThunk(
  'chat/getonechatuser',
  async function (id, { rejectWithValue }) {
    try {
     const tokens = JSON.parse(localStorage.getItem('tokens'));
     const Authorization = `Bearer ${tokens.access}`;
     const config = {
       headers: {
         Authorization,
       },
     };
      const response = await axios.get(`https://server.space-hub.info/api/v1/profile/profile/${id}`,config);
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

export const sendMessage = createAsyncThunk(
   'chat/sendmessage',
   async function (
     {
       chatroom,
       text,
       
     },
     { rejectWithValue, dispatch }
   ) {
     try {
      let msg = {
        "chatroom": chatroom,
        "text": text
     }
      console.log(chatroom); 
      console.log(text); 
       
       console.log(msg);
       const tokens = JSON.parse(localStorage.getItem('tokens'));
         const Authorization = `Bearer ${tokens.access}`;
         const config = {
           headers: {
             Authorization,
             'Content-Type': 'application/json'
           },
         };
       console.log(config);
       const response = await axios.post(
         'https://server.space-hub.info/api/v1/chat/messages/',
         msg,
         config
       );
       console.log(response);
 
       // if (!response.ok) {
       //   throw new Error("Can't add task. Server error.");
       // }
      //  const data = await response.json()

       const data = response.data
       dispatch(chatSlice.actions.sendMessage(data));
       dispatch(getOneRoom())
     } catch (error) {
       return rejectWithValue(error);
     }
   }
 );
 
 export const editGroup = createAsyncThunk(
  'chat/addchatroom',
  async function (
     {
      id,
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
          // console.log(formData);
     const response = await axios.patch(
        `https://server.space-hub.info/api/v1/chat/chatrooms/${id}/`,
        room,
        config
        );
        console.log(response);
        // const data = await  response.json()
        dispatch(editingGroup({id}))
        return response.data
     } catch (error) {
        console.log(error);
     }
  }
)
export const deleteGroup = createAsyncThunk(
  'chat/deletegroup',
  async function (id, { rejectWithValue }) {
    try {
     const tokens = JSON.parse(localStorage.getItem('tokens'));
     const Authorization = `Bearer ${tokens.access}`;
     const config = {
       headers: {
         Authorization,
       },
     };
      const response = await axios.delete(`https://server.space-hub.info/api/v1/chat/chatrooms/${id}`,config);
      // if (!response) {
      //   throw new Error('Server Error');
      // }
      console.log(response);

      const data = await response.data
      // return data;

    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);


const chatSlice = createSlice({
   name: 'chat',
   initialState: {
      privateChatRooms:[],
      messages: [],
      oneRoom: {},
      oneChatUser: {},
      chatusers: []
   },
      reducers: {
         sendMessage(state, action) {
            state.messages.push(action.payload);
          },
         addingPrivateChatRoom(state,action) {
            state.privateChatRooms.push(action.payload)
         },
         editingGroup(state,action) {
            // state.privateChatRooms.push(action.payload)
            // const  subt = state.privateChatRooms.find(
            //   (room) => room.id === action.payload.id
            // )
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
      builder.addCase(getOneRoom.pending, (state) => {
      console.log('pending cards');
      })
      builder.addCase(getOneRoom.rejected,(state) => {
      console.log(state.privateChatRooms);
      console.log('error');
      });
      builder.addCase(getOneRoom.fulfilled, (state, { payload }) => {
      state.oneRoom = [payload]; 
      });
      builder.addCase(deleteGroup.pending, (state) => {
      console.log('pending del');
      })
      builder.addCase(deleteGroup.rejected,(state) => {
      console.log(state.privateChatRooms);
      console.log('error');
      });
      builder.addCase(deleteGroup.fulfilled, (state, { payload }) => {
      // state.m = [payload]; 
      console.log(payload);
      });
      builder.addCase(getOneChatUser.pending, (state) => {
      console.log('pending user');
      })
      builder.addCase(getOneChatUser.rejected,(state) => {
      console.log('error');
      });
      builder.addCase(getOneChatUser.fulfilled, (state, { payload }) => {
      state.oneChatUser = [payload]; 
      });
      builder.addCase(getChatUsers.pending, (state) => {
      console.log('pending user');
      })
      builder.addCase(getChatUsers.rejected,(state) => {
      console.log('error');
      });
      builder.addCase(getChatUsers.fulfilled, (state, { payload }) => {
      state.chatusers = [payload]; 
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
      builder.addCase(sendMessage.pending, (state,action) => {
         console.log('pending sendMessageReducer pending');
         console.log(action.payload);
       });
       builder.addCase(sendMessage.rejected, (state,action) => {
         console.log('error sendMessageReducer', action);
       });
       builder.addCase(sendMessage.fulfilled, (state, { payload }) => {
         // state.privateChatRooms.push(payload);
         state.messages.push(payload);

         console.log('success sendMessagesReducer');
       });
   },
})

const {addingPrivateChatRoom,editingGroup} = chatSlice.actions

export default chatSlice.reducer