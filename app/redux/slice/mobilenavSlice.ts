import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const mobilenavSlice = createSlice({
    initialState : false,
    name : "Mobile Nav Slice",
    reducers : {
        setMobileNavVisibility : (state, action : PayloadAction<boolean>) => action.payload
    }
});

export default mobilenavSlice.reducer;
export const { setMobileNavVisibility } = mobilenavSlice.actions;