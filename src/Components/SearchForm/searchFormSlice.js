import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const searchFormSlice = createSlice({
  name: "searchForm",
  initialState,
  reducers: {
    result: (state, action) => (state = action.payload),
  },
});
export const searchFormState = (state) => state.searchForm;
