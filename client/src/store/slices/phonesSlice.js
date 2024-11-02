import { createSlice } from "@reduxjs/toolkit";

const PHONE_SLICE_NAME = "phones";

const initialState = {
  phones: [],
  preorders: [],
  isFetching: false,
  error: null,
};

const phonesSlice = createSlice({
  name: PHONE_SLICE_NAME,
  initialState,
  extraReducers: (builder) => {},
});

const { reducer, actions } = phonesSlice;

export default reducer;
