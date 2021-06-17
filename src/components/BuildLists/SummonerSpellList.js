import { useEffect, useState } from "react";
import styles from "./SummonerSpellList.module.css";
import { sample, shuffleArray } from "./ArrFunctions";
const SummonerSpellList = ({ filteredJungle }) => {
  const [summonerSpell, setSummonerSpell] = useState([]);
  const urlSummonerSpels =
    "https://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/summoner.json";
  useEffect(() => {
    const getSummonerSpells = async () => {
      const response = await fetch(urlSummonerSpels);
      const data = await response.json();
      const summonerSpells = Object.values(data.data).map(
        ({ id, name, tooltip, modes }) => ({ id, name, tooltip, modes })
      );
      setSummonerSpell(summonerSpells);
    };
    getSummonerSpells();
  }, []);

  const smite = summonerSpell.filter((item) => item.name === "Smite");
  const spells = summonerSpell.filter(
    (item) => item.name !== "Smite" && item.modes.length > 5
  );
  const combineSpells = () => {
    const spellsFinal = [];
    if (!filteredJungle) {
      spellsFinal.push(...shuffleArray(spells));
    } else {
      if (spells.length > 0) {
        spellsFinal.push(...smite, sample(spells));
      }
    }
    return spellsFinal.slice(0, 2);
  };
  const finalSpells = combineSpells();
  return finalSpells.map((item) => (
    <img
      key={item.id}
      src={`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/spell/${item.id}.png`}
      alt={`${item.name}`}
      className={styles["spell-img"]}
    ></img>
  ));
};

export default SummonerSpellList;
