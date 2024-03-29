import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterImgBorder}>
        <span></span>
        <span></span>
        <Image src={"/img/logo.png"} width={200} height={100} alt="footer" />
      </div>
    </div>
  );
};
export default Footer;
