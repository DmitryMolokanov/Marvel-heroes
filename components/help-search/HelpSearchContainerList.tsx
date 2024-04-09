import styles from "./styles.module.scss";
import { publicKey, timestamp, hash } from "../../utils/config/config";
import { useDispatch } from "react-redux";
import { setHero } from "@/store/reducers/heroSlice";
import { useRouter } from "next/navigation";

const HelpSearchContainerList = ({ heroes }: { heroes: string[] }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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
  return (
    <div className={styles.HelpSearchContainerList}>
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
  );
};
export default HelpSearchContainerList;
