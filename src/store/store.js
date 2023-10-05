import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";

export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    account: AccountSlice,
  }
})