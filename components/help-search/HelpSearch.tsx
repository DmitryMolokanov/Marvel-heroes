"use client";
import { useEffect, useRef, useState } from "react";
import { allHeroesArr } from "./allHeroesArr";
import { publicKey, timestamp, hash } from "../../utils/config/config";
import { useDispatch } from "react-redux";
import { setHero } from "@/store/reducers/heroSlice";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";

const HelpSearchComponent = () => {
  const [heroes, setHeroes] = useState(allHeroesArr);
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();
  const dispatch = useDispatch();
  const topBtn = useRef(null);

  const getHero = async (value: string) => {
    const res = await fetch(
      `https://gateway.marvel.com/v1/public/characters?limit=30&ts=${timestamp}&apikey=${publicKey}&hash=${hash}&name=${value}`
    );
    const result = await res.json();
    const selectHero = result.data.results;
    if (selectHero.length) {
      dispatch(setHero(selectHero));
      router.push("/hero");
    }
  };

  document.addEventListener("scroll", () => {
    if (window.scrollY >= document.documentElement.clientHeight) {
      if (topBtn.current) topBtn.current.style.display = "block";
    } else {
      if (topBtn.current) topBtn.current.style.display = "none";
    }
  });

  useEffect(() => {
    let selectHero;
    if (inputValue?.length) {
      selectHero = allHeroesArr.filter((hero) =>
        hero.toLowerCase().includes(inputValue.toLowerCase())
      );
      setHeroes(selectHero);
    }
  }, [inputValue]);

  return (
    <div className={styles.HelpSearchComponent}>
      <h1 className={styles.HelpSearchTitle}>All Heroes</h1>
      <div className={styles.HelpSearchInput}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="enter the hero's name"
        />
      </div>
      <div className={styles.HelpSearchComponentContainer}>
        <div className={styles.HelpSearchComponentContainerList}>
          {heroes.map((item) => {
            return (
              <div
                key={item}
                onClick={() => getHero(item)}
                className={styles.HelpSearchHeroList}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={styles.HelpSearchDiscription}>
          {`If you are unable to find the hero by name in the input field in the
          header, you can try searching for the hero on this page. Simply enter
          the hero's name in the input field on this page or select a hero from
          the list. Click on the hero's name and you can view his page.`}
        </div>
        <div className={styles.HelpSearchToTopBtn}>
          <button onClick={() => window.scrollTo(0, 0)} ref={topBtn}>
            {" "}
            top{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HelpSearchComponent;
