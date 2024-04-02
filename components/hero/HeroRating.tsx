import Image from "next/image";
import styles from "./hero.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { IheroCard } from "@/types/heroCard";
import { setRating } from "@/store/reducers/heroesSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface HeroRatingProps {
  hero: IheroCard;
}

const HeroRating = ({ hero }: HeroRatingProps) => {
  const ref: React.RefObject<HTMLDivElement> = useRef(null);
  const ratingList = useSelector((state: RootState) => state.heroes.rating);
  const disptch = useDispatch();
  const [initRating, setInitRating] = useState(0);

  const getRating = (e: any) => {
    setInitRating(e.target.id);
    disptch(setRating({ rating: e.target.id, id: hero.id }));
  };

  const showRatingQty = (e: any) => {
    const el = e.target;
    if (el.tagName === "IMG") {
      Array.from(el.parentNode.children).forEach((element: any) => {
        if (element.id <= el.id) {
          element.style.opacity = 1;
        } else element.style.opacity = 0.5;
      });
    }
  };
  const hiddenRatingQty = (e: any) => {
    const el = e.target;
    if (el.tagName === "IMG")
      Array.from(el.parentNode.children).forEach((element: any) => {
        if (element.id <= initRating) {
          element.style.opacity = 1;
        } else element.style.opacity = 0.5;
      });
  };

  useEffect(() => {
    ratingList.find((item) => {
      if (item.id === hero.id) {
        Array.from(ref.current!.children).forEach((el: any) => {
          if (el.id <= item.rating) {
            el.style.opacity = 1;
          }
        });
      }
    });
  }, [hero, ratingList]);

  return (
    <div
      ref={ref}
      className={styles.HeroRating}
      onMouseOver={(e) => showRatingQty(e)}
      onMouseOut={(e) => hiddenRatingQty(e)}
      onClick={(e) => getRating(e)}
    >
      <Image
        id="1"
        src={"/vectors/stars.png"}
        width={40}
        height={40}
        alt="star"
      />
      <Image
        id="2"
        src={"/vectors/stars.png"}
        width={40}
        height={40}
        alt="star"
      />
      <Image
        id="3"
        src={"/vectors/stars.png"}
        width={40}
        height={40}
        alt="star"
      />
      <Image
        id="4"
        src={"/vectors/stars.png"}
        width={40}
        height={40}
        alt="star"
      />
      <Image
        id="5"
        src={"/vectors/stars.png"}
        width={40}
        height={40}
        alt="star"
      />
    </div>
  );
};
export default HeroRating;
