import { configureStore } from "@reduxjs/toolkit";
import phonesReducer from "./slices/phonesSlice";

const store = configureStore({
  reducer: {
    phonesData: phonesReducer,
  },
});

export default store;
