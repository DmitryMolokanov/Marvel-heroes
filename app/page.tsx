import Image from "next/image";
import styles from "../components/mainPage/styles.module.scss";

export default function Home() {
  return (
    <div className={styles.MainPage}>
      <Image
        src={"/img/iron.png"}
        width={320}
        height={350}
        alt="iron-man"
        className={styles.mainPageIron}
      />

      <div className={styles.mainPageDiscription}>
        Welcome on this website! You can find here all characters from Marvel
        Universe. <br />
        <br />
        Click <span>Heroes</span> if you want to see all the characters in
        alphabetical order. Scroll down the page and new heroes will download
        automatically.
        <br />
        <br />
        Click <span>Favorites</span> if you want to see your favorite
        characters. If you haven`t chosen your favorite characters yet, this
        page will be empty. To select your favorite character and add it to your
        collection, click the `Add to Favorites` button on the character page.
        <br />
        <br />
        Click <span>Search</span> if you want to search for a specific character
        by name. This data will be obtained from the Marvel API, which requires
        you to enter the correct name. If you cannot receive a response to your
        request, you should use the ? and you can see the entire list of
        characters.
      </div>

      <Image
        src={"/img/spider.png"}
        width={300}
        height={300}
        alt="spider-man"
        className={styles.mainPageSpider}
      />
    </div>
  );
}
