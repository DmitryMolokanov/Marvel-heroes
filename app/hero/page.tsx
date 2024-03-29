"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IheroCard } from "@/types/heroCard";
import Hero from "@/components/hero/Hero";
import styles from "../../components/hero/hero.module.scss";

export default function HeroPage() {
  const [hero]: IheroCard[] = useSelector(
    (state: RootState) => state.hero.hero
  );

  return (
    <div className={styles.HeroPageContainer}>
      {!!hero ? <Hero hero={hero} /> : "Hero not selected"}
    </div>
  );
}
