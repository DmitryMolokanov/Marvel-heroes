import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link href={"https://www.marvel.com/"}>
        <Image src={"/img/logo.png"} width={200} height={100} alt="logo" />
      </Link>
      <div className={styles.FooterNetworkContainer}>
        <div className={styles.FooterNetwork}>
          <Link href={"https://facebook.com/marvel"}>
            <Image
              src={"/vectors/network/facebook.png"}
              width={33}
              height={33}
              alt="facebook"
            />
          </Link>
          <Link href={"https://instagram.com/marvel"}>
            <Image
              src={"/vectors/network/insta.png"}
              width={30}
              height={30}
              alt="instagram"
            />
          </Link>
          <Link href={"http://twitter.com/marvel"}>
            <Image
              src={"/vectors/network/x.png"}
              width={30}
              height={30}
              alt="twitter"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
