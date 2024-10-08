import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../redux/auth/authSlice.js";
import cartReducer from "../redux/cart/cartSlice.js";
import favoritesReducer from "../redux/favorites/favoritesSlice.js";
import { thunk } from "redux-thunk";
import { apiSlice } from "./api/apiSlice.js";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  favorites: favoritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: true,
  // eslint-disable-next-line no-unused-vars
  middleware: (getDefaultMiddleware) => {
    return [thunk, apiSlice.middleware];
  },
});

export const persistor = persistStore(store);
export default store;
