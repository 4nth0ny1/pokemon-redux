import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware().concat(pokemonApi.middleware);
//   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;