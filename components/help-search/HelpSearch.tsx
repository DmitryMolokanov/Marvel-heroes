"use client";
import { useEffect, useRef, useState } from "react";
import { allHeroesArr } from "./allHeroesArr";
import styles from "./styles.module.scss";
import HelpSearchTitle from "./HelpSearchTitle";
import HelpSearchInput from "./HelpSearchInput";
import HelpSearchContainerList from "./HelpSearchContainerList";
import HelpSearchDiscription from "./HelpSearchDiscription";
import HelpSearchToTopBtn from "./HelpSearchToTopBtn";

const HelpSearchComponent = () => {
  const [heroes, setHeroes] = useState(allHeroesArr);
  const [inputValue, setInputValue] = useState<string>("");
  const [visible, setVisible] = useState(false);

  const topBtn = useRef<HTMLButtonElement>(null);

  const scrolled = () => {
    if (window && window.scrollY > 300) {
      setVisible(true);
      window.addEventListener("scroll", scrolled);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    let selectHero;
    if (inputValue?.length) {
      selectHero = allHeroesArr.filter((hero) =>
        hero.toLowerCase().includes(inputValue.toLowerCase())
      );
      setHeroes(selectHero);
    } else setHeroes(allHeroesArr);
  }, [inputValue]);

  return (
    <div className={styles.HelpSearchComponent}>
      <HelpSearchTitle>All Heroes</HelpSearchTitle>
      <HelpSearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <div className={styles.HelpSearchComponentContainer}>
        <HelpSearchContainerList heroes={heroes} />
        <HelpSearchDiscription />
        {visible ? <HelpSearchToTopBtn topBtn={topBtn} /> : null}
      </div>
    </div>
  );
};
export default HelpSearchComponent;
