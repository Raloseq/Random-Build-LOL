import { useState } from "react";
import styles from "./SearchInput.module.css";
const SearchInput = (props) => {
  const [eneteredFilter, setEnteredFilter] = useState("");
  const filterChangeHandler = (e) => {
    setEnteredFilter(e.target.value);
    props.onSaveFilteredName(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search champion"
      value={eneteredFilter}
      onChange={filterChangeHandler}
      className={styles.input}
    ></input>
  );
};

export default SearchInput;
