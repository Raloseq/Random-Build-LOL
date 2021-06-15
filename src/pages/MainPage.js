import { Fragment, useState } from "react";
import SearchBar from "../components/SearchChampions/SearchBar";
import ChampionsList from "../components/Champions/ChampionsList";
const MainPage = (props) => {
  const [filteredName, setFilteredName] = useState("");
  const [filteredTag, setFilteredTag] = useState("");

  const saveFilteredName = (e) => {
    setFilteredName(e);
  };

  const saveFilteredTag = (e) => {
    setFilteredTag(e);
  };
  return (
    <Fragment>
      <SearchBar
        onFilteredName={saveFilteredName}
        onFilteredTag={saveFilteredTag}
      />
      <ChampionsList
        champions={props.champions}
        filterTag={filteredTag}
        filterName={filteredName}
      />
    </Fragment>
  );
};

export default MainPage;
