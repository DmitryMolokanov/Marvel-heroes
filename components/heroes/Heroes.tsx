"use client";

import { publicKey, timestamp, hash } from "../../utils/config/config";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./heroes.module.scss";
import { IheroCard } from "@/types/heroCard";

const Heroes = ({ intialHeroes }: { intialHeroes: IheroCard[] }) => {
  const [heroes, setHeroes] = useState(intialHeroes);
  const [offset, setOffset] = useState(30);

  useEffect(() => {
    const addHeroes = async () => {
      if (heroes.length >= 1564) return;
      if (
        window.innerHeight + window.scrollY + 1 >=
        document.documentElement.scrollHeight
      ) {
        const res = await fetch(
          `https://gateway.marvel.com/v1/public/characters?limit=30&offset=${offset}&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
        );
        const newHeroes = await res.json();
        setHeroes([...heroes, ...newHeroes.data.results]);
        setOffset(offset + 30);
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
            <div key={hero.id} className={styles.heroCard}>
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
    </div>
  );
};
export default Heroes;
