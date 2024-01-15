/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUrl: async () => {
    return await window.location.href;
  },
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setCurrentUrl: (state) => {
      state.currentUrl !== window.location.href ? location.reload() : null;
    },
    resetCurrentUrl: (state) => {
      state.currentUrl = "";
    },
  },
});

export const { setCurrentUrl, resetCurrentUrl } = locationSlice.actions;
export default locationSlice.reducer;
