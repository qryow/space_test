// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const usersApi = createApi({
//   reducerPath: "usersApi",
//   tagTypes: ["User"],
//   baseQuery: fetchBaseQuery({ baseUrl: "https://server.space-hub.info/api/v1/profile/"}),
//   endpoints: (build) => ({
//     getChatUsers:  build.query({
//       query: () => 'profile/',
//       providesTags: (result) =>
//       Array.isArray(result)
//         ? [
//             ...result.map(({ id }) => ({ type: "User", id })),
//             { type: "User", id: "LIST" },
//           ]
//         : [{ type: "User", id: "LIST" }],
//   }),
//   }),   
      
// });

// export const {
//   useGetChatUsersQuery,
// } = usersApi;