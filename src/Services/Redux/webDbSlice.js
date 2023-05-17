import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   homePage: {},
//   carsPage: {},
//   blogPage: {},
//   aboutPage: {},
//   contactPage: {},
// };
const initialState = {};
export const webDbSlice = createSlice({
  name: "webDB",
  initialState,
  reducers: {
    addDb: (state, action) => (state = action.payload),
    // addHomePageDB: (state, action) => (state = { ...state, homePage: action.payload }),
    // addCarsPageDB: (state, action) => (state = { ...state, carsPage: action.payload }),
    // addBlogPageDB: (state, action) => (state = { ...state, blogPage: action.payload }),
    // addAboutPageDB: (state, action) => (state = { ...state, aboutPage: action.payload }),
    // addContactPageDB: (state, action) => (state = { ...state, contactPage: action.payload }),
  },
});
export const webDbState = (state) => state.webDB;
