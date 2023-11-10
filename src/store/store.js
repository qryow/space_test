import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./account/AccountSlice";
import countriesActions from "./countries/CountriesActions";
import ProjectsReducer from "./projects/ProjectsSlice";

export default configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    reducer: {
        account: AccountSlice,
        countries: countriesActions,
        projects: ProjectsReducer,
    },
});
