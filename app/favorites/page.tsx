"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import HeroCard from "@/components/heroes/HeroCard";
import containerStyles from "../../components/heroes/heroes.module.scss";
import styles from "../../components/favorites/styles.module.scss";
import FavoriteDeleteBtn from "@/components/favorites/FavoriteDeleteBtn";

const Favorites = () => {
  const { favorites } = useSelector((state: RootState) => state.heroes);

  return (
    <div>
      <h1 className={styles.FavoritesTitle}>Favorites</h1>
      <div className={containerStyles.heroesMainContainer}>
        {favorites.map((hero) => {
          return (
            <div key={hero.id} className={styles.FavoriteCardContainer}>
              <HeroCard hero={hero} />
              <FavoriteDeleteBtn hero={hero} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Favorites;
