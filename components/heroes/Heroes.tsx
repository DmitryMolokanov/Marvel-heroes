"use client";

import { publicKey, timestamp, hash } from "../../utils/config/config";
import { useEffect, useState } from "react";
import styles from "./heroes.module.scss";
import { IheroCard } from "@/types/heroCard";
import Loading from "../loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setHeroesState, setOffset } from "@/store/reducers/heroesSlice";
import HeroCard from "./HeroCard";

const Heroes = ({ intialHeroes }: { intialHeroes: IheroCard[] }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { heroes } = useSelector((state: RootState) => state.heroes);
  const offset = useSelector((state: RootState) => state.heroes.offset);

  const setReduxState = () => {
    dispatch(setHeroesState(intialHeroes));
  };
  if (!heroes.length) setReduxState();

  useEffect(() => {
    const addHeroes = async () => {
      if (heroes.length >= 1564) return;
      if (
        window &&
        window.innerHeight + window.scrollY + 1 >=
          document.documentElement.scrollHeight
      ) {
        setLoading(true);
        const res = await fetch(
          `https://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );
        const newHeroes = await res.json();
        dispatch(setHeroesState(newHeroes.data.results));
        dispatch(setOffset(30));
        setLoading(false);
      }
    };

    const scrollHandler = () => {
      if (!loading) addHeroes();
    };

    window && window.addEventListener("scroll", scrollHandler);
    return () => {
      window && window.removeEventListener("scroll", scrollHandler);
    };
  }, [heroes, dispatch, offset, loading]);

  return (
    <div>
      <div className={styles.heroesMainContainer}>
        {!heroes.length
          ? intialHeroes.map((hero) => <HeroCard hero={hero} key={hero.id} />)
          : heroes.map((hero: IheroCard) => {
              return <HeroCard hero={hero} key={hero.id} />;
            })}
      </div>
      {loading ? <Loading /> : null}
    </div>
  );
};
export default Heroes;
