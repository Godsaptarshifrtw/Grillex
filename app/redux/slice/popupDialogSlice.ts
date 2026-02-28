import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const popupDialogSlice = createSlice({
  initialState: false,
  name: "Popup Dialog Slice",
  reducers: {
    setPopupDialogVisibility: (
      state: boolean,
      action: PayloadAction<boolean>
    ) => action.payload,
  },
});

export default popupDialogSlice.reducer;
export const { setPopupDialogVisibility } = popupDialogSlice.actions;
