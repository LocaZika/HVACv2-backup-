import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "Pages";
import { authSlice } from "Middlewares/authSlice";
import { formHeroSlice } from "Pages";
import { searchFormSlice } from "Components";
import { carsPageSlice } from "Pages";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    formHero: formHeroSlice.reducer,
    searchForm: searchFormSlice.reducer,
    carsPage: carsPageSlice.reducer,
  },
});
