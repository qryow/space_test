import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";
import countriesActions from './countries/CountriesActions'
import ProfileSlice from "./profile/ProfileSlice";
import ProjectsSlice from "./projects/ProjectsSlice";
import PostsSlice from "./posts/PostsSlice";

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    account: AccountSlice,
    countries: countriesActions,
    profile: ProfileSlice,
    projects: ProjectsSlice,
    posts: PostsSlice
  }
})