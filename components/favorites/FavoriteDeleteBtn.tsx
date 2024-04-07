"use client";
import { FC } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useDispatch } from "react-redux";
import { deleteFavorites } from "@/store/reducers/heroesSlice";
import { IheroCard } from "@/types/heroCard";

interface FavoriteDeleteBtnProps {
  hero: IheroCard;
}

const FavoriteDeleteBtn: FC<FavoriteDeleteBtnProps> = ({ hero }) => {
  const { favorites } = useSelector((store: RootState) => store.heroes);
  const dispatch = useDispatch();

  const deleteHeroFromFavorites = () => {
    dispatch(deleteFavorites(hero));
  };

  return (
    <button
      className={styles.FavoriteDeleteBtn}
      /// удалить из избранного
      onClick={(e) => deleteHeroFromFavorites()}
      /// сделать изображение чб
      onMouseMove={(e: React.MouseEvent<HTMLButtonElement>) => {
        const el = e.target as HTMLButtonElement;
        const img = el!.parentNode!.childNodes[0].childNodes[0] as HTMLElement;
        const name = el!.parentNode!.childNodes[0].childNodes[1] as HTMLElement;
        name.style.backgroundColor = "gray";
        img.style.filter = "grayscale(70%)";
      }}
      /// вернуть цветное изображение
      onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
        const el = e.target as HTMLButtonElement;
        const child = el!.parentNode!.childNodes[0]
          .childNodes[0] as HTMLElement;
        const name = el!.parentNode!.childNodes[0].childNodes[1] as HTMLElement;
        name.style.backgroundColor = "red";
        child.style.filter = "grayscale(0)";
      }}
    >
      Delete
    </button>
  );
};
export default FavoriteDeleteBtn;
