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
  },
});
export const { setHeroesState, setOffset } = heroesSlice.actions;
export default heroesSlice.reducer;
