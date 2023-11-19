import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatApi = createApi({
  reducerPath: "chatApi",
  tagTypes: ["Chat"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://server.space-hub.info/api/v1/chat/"}),
  endpoints: (build) => ({
    getChatRooms: build.query({
      query: () => 'chatrooms/',
      providesTags: (result) =>
      Array.isArray(result)
        ? [
            ...result.map(({ id }) => ({ type: "Chat", id })),
            { type: "Chat", id: "LIST" },
          ]
        : [{ type: "Chat", id: "LIST" }],
  }),
    createChatRoom: build.mutation({
      query: (data) => ({
        url: '/chatrooms/',
        method: 'POST',
        body: data
        
      }),
      invalidatesTags: ['Chat'],
      options: {
        headers: (getHeaders, { getState }) => {
          const tokens = JSON.parse(localStorage.getItem('tokens'));
          const Authorization = `Bearer ${tokens.access}`;
          return {
            Authorization,
            "Content-Type": 'application/json'
          };
        },
        onSuccess: ({ data, requestId, dispatch }) => {
          console.log('Request ID:', requestId);
          console.log('Request Body:', data);
        },
      },
    }),
    sendMessage: build.mutation({
      query: (data) => ({
        url: '/messages/',
        method: 'POST',
        body: data
      }),
      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
      options: {
        headers: (getHeaders, { getState }) => {
          const tokens = JSON.parse(localStorage.getItem('tokens'));
          const Authorization = `Bearer ${tokens.access}`;
          return {
            Authorization,
            "Content-Type": 'application/json'
          };
        },
        onSuccess: ({ data, requestId, dispatch }) => {
          console.log('Request ID:', requestId);
          console.log('Request Body:', data);
        },
      },
    })
  }),
        
      
});

export const {
  useGetChatRoomsQuery,
  useCreateChatRoomMutation,
  useSendMessageMutation
} = chatApi;