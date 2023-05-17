import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "Pages";
import { authSlice } from "Middlewares/authSlice";
import { formHeroSlice } from "Pages";
import { searchFormSlice } from "Components";
import { carsSlice } from "./carsSlice";
import { webDbSlice } from "./webDbSlice";

export const store = configureStore({
  reducer: {
    webDB: webDbSlice.reducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    formHero: formHeroSlice.reducer,
    searchForm: searchFormSlice.reducer,
    cars: carsSlice.reducer,
  },
});
