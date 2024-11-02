import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./slices/phonesSlice";

const store = configureStore({
  reducer: {
    phonesdata: phonesReducer,
  },
});

export default store;
