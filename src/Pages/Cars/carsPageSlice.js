import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  extraOpt: {
    sort: "price",
    order: "desc",
    page: 1,
    limit: "9",
    search: "",
  },
  totalCount: 0,
  result: [],
};
export const carsPageSlice = createSlice({
  name: "carsPage",
  initialState,
  reducers: {
    changeOrder: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, order: action.payload } }),
    changeLimit: (state, action) =>
      (state = { ...state, extraOpt: { ...state.extraOpt, limit: action.payload } }),
    changeTotalCount: (state, action) => (state = { ...state, totalCount: action.payload }),
    changeResult: (state, action) => (state = { ...state, result: action.payload }),
  },
});
export const carsPageState = (state) => state.carsPage;
