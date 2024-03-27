import { createSlice } from "@reduxjs/toolkit";
import { IheroCard } from "@/types/heroCard";

interface heroState {
  hero: IheroCard[];
}

export const initialState: heroState = {
  hero: [],
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setHero: (state, action) => {
      state.hero = action.payload;
    },
  },
});

export const { setHero } = heroSlice.actions;
export default heroSlice.reducer;
