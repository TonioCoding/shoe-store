import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.favorites.push(action.payload);
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addItem, clearFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
