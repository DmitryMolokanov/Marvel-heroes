import styles from "./styles.module.scss";
import { FC } from "react";

interface HelpSearchInputProps {
  inputValue: string;
  setInputValue: (el: string) => void;
}

const HelpSearchInput: FC<HelpSearchInputProps> = ({
  inputValue,
  setInputValue,
}) => {
  return (
    <div className={styles.HelpSearchInput}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="enter the hero's name"
      />
    </div>
  );
};
export default HelpSearchInput;
