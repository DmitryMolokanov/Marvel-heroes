import styles from "./styles.module.scss";

const HelpSearchDiscription = () => {
  return (
    <div className={styles.HelpSearchDiscription}>
      {`If you are unable to find the hero by name in the input field in the
  header, you can try searching for the hero on this page. Simply enter
  the hero's name in the input field on this page or select a hero from
  the list. Click on the hero's name and you can view his page.`}
    </div>
  );
};
export default HelpSearchDiscription;
