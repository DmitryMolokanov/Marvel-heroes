import { createSlice } from "@reduxjs/toolkit";
import { IheroCard } from "@/types/heroCard";
import { Irating } from "@/types/rating";

interface heroesState {
  heroes: IheroCard[];
  offset: number;
  rating: Irating[];
  favorites: IheroCard[];
  favoritesId: number[];
}

export const initialState: heroesState = {
  heroes: [],
  offset: 30,
  rating: [],
  favorites: [],
  favoritesId: [],
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
    setFavorites: (state, action) => {
      if (state.favoritesId.includes(action.payload.id)) {
        return;
      } else {
        state.favoritesId.push(action.payload.id);
        state.favorites.push(action.payload);
      }
    },
    deleteFavorites: (state, action) => {
      state.favorites = state.favorites.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.favoritesId = state.favoritesId.filter((item) => {
        return item !== action.payload.id;
      });
    },
  },
});

export const {
  setHeroesState,
  setOffset,
  setRating,
  setFavorites,
  deleteFavorites,
} = heroesSlice.actions;
export default heroesSlice.reducer;
