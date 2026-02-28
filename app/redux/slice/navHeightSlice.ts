import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const navHeightSlice = createSlice({
  initialState: "0%",
  name: "Navbar Height",
  reducers: {
    setNavBarHeight: (state: string, action: PayloadAction<string>) =>
      action.payload,
  },
});

export default navHeightSlice.reducer;
export const { setNavBarHeight } = navHeightSlice.actions;
