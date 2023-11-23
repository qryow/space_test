import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";
import countriesActions from "./countries/CountriesActions";
import profileSlice from "./profile/ProfileSlice";
import projectsSlice from "./projects/projectsSlice";
import postsSlice from "./posts/PostsSlice";
import { chatApi } from "./chat/chatApi";
import { usersApi } from "./chat/usersApi";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(chatApi.middleware),

  reducer: {
    account: AccountSlice,
    countries: countriesActions,
    profile: profileSlice,
    projects: projectsSlice,
    posts: postsSlice,
    [chatApi.reducerPath]: chatApi.reducer,
  },
});
