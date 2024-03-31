import { createSlice } from "@reduxjs/toolkit";
import { IheroCard } from "@/types/heroCard";

interface heroesState {
  heroes: IheroCard[];
  offset: number;
}

export const initialState: heroesState = {
  heroes: [],
  offset: 30,
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroesState: (state, action) => {
      state.heroes = [...state.heroes, ...action.payload];
    },
    setOffset: (state, action) => {
      state.offset += action.payload;
    },
    setRating: (state, action) => {
      state.heroes.map((hero) => {
        if (hero.id === action.payload.id) hero.rating = action.payload.rating;
      });
    },
  },
});
export const { setHeroesState, setOffset, setRating } = heroesSlice.actions;
export default heroesSlice.reducer;
