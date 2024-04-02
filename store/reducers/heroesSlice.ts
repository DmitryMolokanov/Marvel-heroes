import { createSlice } from "@reduxjs/toolkit";
import { IheroCard } from "@/types/heroCard";
import { Irating } from "@/types/rating";

interface heroesState {
  heroes: IheroCard[];
  offset: number;
  rating: Irating[];
}

export const initialState: heroesState = {
  heroes: [],
  offset: 30,
  rating: [],
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
      let matchHero = false;
      state.rating.find((item) => {
        if (item.id === action.payload.id) {
          matchHero = true;
          item.rating = action.payload.rating;
        }
      });
      if (!matchHero) state.rating.push(action.payload);
    },
  },
});

export const { setHeroesState, setOffset, setRating } = heroesSlice.actions;
export default heroesSlice.reducer;
