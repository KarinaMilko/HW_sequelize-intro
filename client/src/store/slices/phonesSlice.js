import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "./../../api";

const PHONE_SLICE_NAME = "phones";

const initialState = {
  phones: [],
  preorders: [],
  isFetching: false,
  error: null,
  filter: {
    brand: null,
  },
};

export const getPhonesThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/get`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.getPhones(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const createPhonesThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/post`,
  async (payload, { rejectWithValue }) => {
    try {
      const {
        data: { data },
      } = await API.createPhone(payload);
      return data;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

export const removePhoneThunk = createAsyncThunk(
  `${PHONE_SLICE_NAME}/delete`,
  async (id, { rejectWithValue }) => {
    try {
      await API.removePhone(id);
      return id;
    } catch (err) {
      return rejectWithValue({ errors: err.response.data });
    }
  }
);

const phonesSlice = createSlice({
  name: PHONE_SLICE_NAME,
  initialState,
  reducers: {
    changePhoneBrandFilter: (state, { payload }) => {
      state.filter.brand = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPhonesThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(getPhonesThunk.fulfilled, (state, { payload }) => {
      state.phones = [...payload];
      state.isFetching = false;
    });

    builder.addCase(getPhonesThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    builder.addCase(createPhonesThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(createPhonesThunk.fulfilled, (state, { payload }) => {
      state.phones.push(payload);
      state.isFetching = false;
    });

    builder.addCase(createPhonesThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });

    builder.addCase(removePhoneThunk.pending, (state) => {
      state.isFetching = true;
      state.error = null;
    });

    builder.addCase(removePhoneThunk.fulfilled, (state, { payload }) => {
      const foundPhoneIndex = state.phones.findIndex((f) => f.id === payload);
      if (foundPhoneIndex !== -1) {
        state.phones.splice(foundPhoneIndex, 1);
      }
      state.isFetching = false;
    });

    builder.addCase(removePhoneThunk.rejected, (state, { payload }) => {
      state.error = payload;
      state.isFetching = false;
    });
  },
});

const { reducer, actions } = phonesSlice;

export const { changePhoneBrandFilter } = actions;

export default reducer;
