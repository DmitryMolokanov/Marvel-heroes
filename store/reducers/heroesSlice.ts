import { createSlice } from "@reduxjs/toolkit";
import { IheroCard } from "@/types/heroCard";

interface heroesState {
  heroes: IheroCard[];
}

export const initialState: heroesState = {
  heroes: [],
};

export const heroesSlice = createSlice({
  name: "heroes",
  initialState,
  reducers: {
    setHeroes: (state, action) => {
      state.heroes = [...state.heroes, action.payload];
    },
  },
});
export const { setHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
