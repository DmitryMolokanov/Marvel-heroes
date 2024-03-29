"use client";

import { publicKey, timestamp, hash } from "../../utils/config/config";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./heroes.module.scss";
import { IheroCard } from "@/types/heroCard";
import Loading from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setHeroes } from "@/store/reducers/heroesSlice";
import { setHero } from "@/store/reducers/heroSlice";
import { useRouter } from "next/navigation";

const Heroes = ({ intialHeroes }: { intialHeroes: IheroCard[] }) => {
  const [heroes, setHeroes] = useState(intialHeroes);
  const [offset, setOffset] = useState(30);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const selector = useSelector((state: RootState) => state.heroes);

  const viewHero = (hero: IheroCard) => {
    dispatch(setHero([hero]));
    router.push("/hero");
  };

  const setReduxState = () => {
    dispatch(setHeroes(intialHeroes));
  };
  setReduxState();

  useEffect(() => {
    console.log(selector);
    const addHeroes = async () => {
      if (heroes.length >= 1564) return;
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        const res = await fetch(
          `https://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );
        const newHeroes = await res.json();
        setHeroes([...heroes, ...newHeroes.data.results]);
        setOffset(offset + 30);
        setLoading(false);
      }
    };
    window.addEventListener("scroll", addHeroes);
    return () => {
      window.removeEventListener("scroll", addHeroes);
    };
  }, [heroes, offset]);

  return (
    <div>
      <div className={styles.heroesMainContainer}>
        {heroes.map((hero: IheroCard) => {
          return (
            <div
              key={hero.id}
              className={styles.heroCard}
              onClick={() => viewHero(hero)}
            >
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                width={250}
                height={250}
                alt={hero.name}
              />
              <div className={styles.cardName}>{hero.name}</div>
            </div>
          );
        })}
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
};
export default Heroes;
