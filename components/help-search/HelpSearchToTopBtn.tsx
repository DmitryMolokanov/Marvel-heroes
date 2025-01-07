import Image from "next/image";
import styles from "./styles.module.scss";

const HelpSearchToTopBtn = ({ topBtn }: { topBtn: any }) => {
  return (
    <div className={styles.HelpSearchToTopBtn}>
      <button onClick={() => window && window.scrollTo(0, 0)} ref={topBtn}>
        <Image src={"/vectors/triangle.png"} width={40} height={40} alt="top" />
      </button>
    </div>
  );
};
export default HelpSearchToTopBtn;
