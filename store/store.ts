import { configureStore } from "@reduxjs/toolkit";
import heroReduser from "./reducers/heroSlice";

export const store = configureStore({
  reducer: {
    hero: heroReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
