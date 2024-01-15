import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../redux/auth/authSlice.js";
import locationReducer from "../redux/location/locationSlice.js"
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
    // eventually add api reducer here
  },
  devTools: true,
  // eslint-disable-next-line no-unused-vars
  middleware: (getDefaultMiddleware) => {
    return [thunk]
  },
});

export const persistor = persistStore(store);
export default store;
