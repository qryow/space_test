import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";
import countriesActions from './countries/CountriesActions'
import ProfileSlice from "./profile/ProfileSlice";
import projectsSlice from "./projects/projectsSlice";
import postsSlice from "./posts/postsSlice";

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    account: AccountSlice,
    countries: countriesActions,
    profile: ProfileSlice,
    projects: projectsSlice,
    posts: postsSlice
  }
})