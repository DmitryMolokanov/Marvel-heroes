import Image from "next/image";
import styles from "./heroes.module.scss";
import { IheroCard } from "@/types/heroCard";
import { useRouter } from "next/navigation";
import { setHero } from "@/store/reducers/heroSlice";
import { useDispatch } from "react-redux";

interface HeroesCardProps {
  hero: IheroCard;
}

const HeroCard = ({ hero }: HeroesCardProps) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const viewHero = (hero: IheroCard) => {
    dispatch(setHero([hero]));
    router.push("/hero");
  };

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
};
export default HeroCard;
