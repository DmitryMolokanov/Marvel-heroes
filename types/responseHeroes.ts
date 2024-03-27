import { IheroCard } from "./heroCard";

export interface IresponseHeroes {
  count: number;
  limit: number;
  offset: number;
  results: IheroCard[];
  total: number;
}
