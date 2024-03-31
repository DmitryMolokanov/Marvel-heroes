import { IheroCard } from "@/types/heroCard";
import Image from "next/image";
import styles from "./hero.module.scss";
import HeroRating from "./HeroRating";

const Hero = ({ hero }: { hero: IheroCard }) => {
  return (
    <div className={styles.HeroContainer}>
      <div className={styles.HeroNameContainer}>{hero.name}</div>
      <div className={styles.HeroImgContainer}>
        <Image
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          width={500}
          height={500}
          alt={hero.name}
        />
      </div>
      <div className={styles.HeroFavorites}>
        <span>Add to favorites</span>
        <HeroRating hero={hero} />
      </div>
      <div className={styles.HeroDiscription}>
        Description: <br />
        <span>
          {hero.description
            ? hero.description
            : "There is no character description"}
        </span>
      </div>
    </div>
  );
};
export default Hero;
