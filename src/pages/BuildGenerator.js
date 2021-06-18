import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ItemList from "../components/BuildLists/ItemList";
import SummonerSpellList from "../components/BuildLists/SummonerSpellList";
import ContainerColumn from "../components/UI/ContainerColumn";
import Container from "../components/UI/Container";
import FilterCheckbox from "../components/FilterList/FilterCheckbox";
import styles from "./BuildGenerator.module.css";
const BuildGenerator = () => {
  const [filteredJungle, setFilteredJungle] = useState(false);
  const [filteredSupport, setFilteredSupport] = useState(false);
  const params = useParams();
  const champName = params.Aatrox.substring(1);
  const urlChampionImage = `https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/${champName}.png`;

  const saveFilterJungle = (e) => {
    setFilteredJungle(e);
  };
  const saveFilterSupport = (e) => {
    setFilteredSupport(e);
  };
  return (
    <section className={styles.wrapper}>
      <ContainerColumn>
        <h2>{champName}</h2>
        <img src={urlChampionImage} alt={`champion-${champName}`} />
      </ContainerColumn>
      <ContainerColumn>
        <Container>
          <FilterCheckbox
            onFilteredJungle={saveFilterJungle}
            onFilteredSupport={saveFilterSupport}
          />
        </Container>
        <Container>
          <ItemList
            filteredJungle={filteredJungle}
            filteredSupport={filteredSupport}
          />
        </Container>
        <Container>
          <SummonerSpellList filteredJungle={filteredJungle} />
        </Container>
        <Link to="/" className={styles.link}>
          Back to main page
        </Link>
      </ContainerColumn>
    </section>
  );
};

export default BuildGenerator;
