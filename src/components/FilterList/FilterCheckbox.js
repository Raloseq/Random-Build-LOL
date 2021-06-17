import { Fragment, useState } from "react";
import styles from "./FilterCheckbox.module.css";
import ContainerColumn from "../UI/ContainerColumn";
const FilterCheckbox = (props) => {
  const [jungle, setJungle] = useState(false);
  const [support, setSupport] = useState(false);

  const filterJungle = () => {
    setJungle(!jungle);
  };
  const filterSupport = () => {
    setSupport(!support);
  };

  return (
    <Fragment>
      <ContainerColumn>
        <label htmlFor="smite" className={styles.label}>
          Smite
        </label>
        <input
          id="smite"
          type="checkbox"
          checked={jungle}
          onChange={(e) => {
            props.onFilteredJungle(e.target.checked);
          }}
          onClick={filterJungle}
          className={styles.checkbox}
        />
      </ContainerColumn>
      <ContainerColumn>
        <label htmlFor="support" className={styles.label}>
          Support
        </label>
        <input
          id="support"
          type="checkbox"
          checked={support}
          onChange={(e) => {
            props.onFilteredSupport(e.target.checked);
          }}
          onClick={filterSupport}
          className={styles.checkbox}
        />
      </ContainerColumn>
    </Fragment>
  );
};

export default FilterCheckbox;
