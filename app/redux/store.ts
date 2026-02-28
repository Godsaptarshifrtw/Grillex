import { configureStore } from "@reduxjs/toolkit";
import mobilenavSlice from "./slice/mobilenavSlice";
import popupDialogSlice from "./slice/popupDialogSlice";
import navHeightSlice from "./slice/navHeightSlice";

export const store = configureStore({
    reducer : {
        mobilenav : mobilenavSlice,
        popupdialog : popupDialogSlice,
        navBarHeight : navHeightSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;