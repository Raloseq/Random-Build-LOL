import styles from "./SearchButtons.module.css";

const SearchButton = (props) => {
  const filterByTag = (e) => {
    props.onSaveFilteredTag(e.target.value);
  };
  return (
    <div>
      <button
        type="button"
        onClick={filterByTag}
        value="All"
        className={styles.button}
      >
        All
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Assassin"
        className={styles.button}
      >
        Assassin
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Fighter"
        className={styles.button}
      >
        Fighter
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Mage"
        className={styles.button}
      >
        Mage
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Marksman"
        className={styles.button}
      >
        Marksman
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Support"
        className={styles.button}
      >
        Support
      </button>
      <button
        type="button"
        onClick={filterByTag}
        value="Tank"
        className={styles.button}
      >
        Tank
      </button>
    </div>
  );
};

export default SearchButton;
