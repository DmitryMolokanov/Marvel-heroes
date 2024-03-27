"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { IheroCard } from "@/types/heroCard";

export default function Hero() {
  const [hero]: IheroCard[] = useSelector(
    (state: RootState) => state.hero.hero
  );

  return <div>{hero.name}</div>;
}
