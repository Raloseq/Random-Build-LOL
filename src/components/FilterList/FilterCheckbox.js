import { useState } from "react";
import styles from "./FilterCheckbox.module.css";
import ContainerColumn from "../UI/ContainerColumn";
import Container from "../UI/Container";
const FilterCheckbox = (props) => {
  const [jungle, setJungle] = useState(false);
  const [support, setSupport] = useState(false);

  return (
    <Container>
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
          onClick={() => setJungle((prev) => !prev)}
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
          onClick={() => setSupport((prev) => !prev)}
          className={styles.checkbox}
        />
      </ContainerColumn>
    </Container>
  );
};

export default FilterCheckbox;
