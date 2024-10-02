import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slices/apislice.js";

export  const store = configureStore({
  reducer: {
    // fruits: fruitSlice.reducer,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
