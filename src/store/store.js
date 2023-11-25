import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";
import countriesActions from "./countries/CountriesActions";
import profileSlice from "./profile/ProfileSlice";
import projectsSlice from "./projects/ProjectsSlice";
import postsSlice from "./posts/PostsSlice";
import { chatApi } from "./chat/chatApi";
import { usersApi } from "./chat/usersApi";
import chatSlice from "./chat/chatSlice";

export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

  reducer: {
    account: AccountSlice,
    countries: countriesActions,
    profile: profileSlice,
    projects: projectsSlice,
    posts: postsSlice,
    chat: chatSlice,
  },
});
