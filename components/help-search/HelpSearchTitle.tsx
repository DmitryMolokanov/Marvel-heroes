import { ReactNode } from "react";
import styles from "./styles.module.scss";

const HelpSearchTitle = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.HelpSearchTitle}>{children}</h1>;
};
export default HelpSearchTitle;
