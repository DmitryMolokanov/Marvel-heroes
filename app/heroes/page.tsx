import { publicKey, timestamp, hash } from "../../utils/config/config";
import Heroes from "@/components/heroes/Heroes";

const getHeroes = async () => {
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?limit=30&offset=0&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
  );
  const initialHeroes = await res.json();
  return initialHeroes.data.results;
};

const HeroesPage = async () => {
  const intialHeroes = await getHeroes();
  return (
    <div>
      <Heroes intialHeroes={intialHeroes} />
    </div>
  );
};
export default HeroesPage;
