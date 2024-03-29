import { configureStore } from "@reduxjs/toolkit";
import heroReduser from "./reducers/heroSlice";
import heroesReduser from "./reducers/heroesSlice";

export const store = configureStore({
  reducer: {
    hero: heroReduser,
    heroes: heroesReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
