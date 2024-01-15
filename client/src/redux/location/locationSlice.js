/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUrl: window.location.href,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCurrentUrl: (state, action) => {
      state.currentUrl = action.payload;
    },
    resetCurrentUrl: (state) => {
      state.currentUrl = "";
    },
  },
});

export const { setCurrentUrl, resetCurrentUrl } = locationSlice.actions;
export default locationSlice.reducer;
