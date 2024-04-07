import { setFavorites, deleteFavorites } from "@/store/reducers/heroesSlice";
import { RootState } from "@/store/store";
import { IheroCard } from "@/types/heroCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface HeroFavoritesProps {
  hero: IheroCard;
}

const HeroFavorites = ({ hero }: HeroFavoritesProps) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.heroes);
  const [isFavorites, setIsFavorites] = useState(false);

  const getFavorite = () => {
    if (!favorites.includes(hero)) {
      dispatch(setFavorites(hero));
      setIsFavorites(true);
    } else {
      dispatch(deleteFavorites(hero));
      setIsFavorites(false);
    }
  };

  useEffect(() => {
    if (favorites.includes(hero)) setIsFavorites(true);
  }, [favorites, hero, isFavorites]);

  return (
    <button onClick={() => getFavorite()}>
      {isFavorites ? "Remove to favorites" : "Add to favorites"}
    </button>
  );
};
export default HeroFavorites;
