import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "price",
  order: "desc",
  limit: "9",
  totalCount: 0,
};
export const carsPageSlice = createSlice({
  name: "carsPage",
  initialState,
  reducers: {
    changeOrder: (state, action) => (state = { ...state, order: action.payload }),
    changeLimit: (state, action) => (state = { ...state, limit: action.payload }),
    changeTotalCount: (state, action) => (state = { ...state, totalCount: action.payload }),
  },
});
export const carsPageState = (state) => state.carsPage;
