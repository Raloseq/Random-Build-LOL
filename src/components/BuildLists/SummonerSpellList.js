import styles from "./SummonerSpellList.module.css";
import { sample, shuffleArray } from "./ArrFunctions";
import useHttp from "../../hooks/use-https";
const SummonerSpellList = ({ filteredJungle }) => {
  const urlSummonerSpels =
    "https://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/summoner.json";
  const objectValues = () => {
    return ({ id, name, tooltip, modes }) => ({ id, name, tooltip, modes });
  };

  const summonerSpell = useHttp(urlSummonerSpels,objectValues());

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
