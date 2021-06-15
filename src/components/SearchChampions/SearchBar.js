import ContainerColumn from "../UI/ContainerColumn";
import SearchButtons from "./SearchButtons";
import SearchInput from "./SearchInput";

const SearchBar = (props) => {
  const saveFilteredName = (e) => {
    props.onFilteredName(e);
  };

  const saveFilteredTag = (e) => {
    props.onFilteredTag(e);
  };

  return (
    <ContainerColumn>
      <SearchInput onSaveFilteredName={saveFilteredName} />
      <SearchButtons onSaveFilteredTag={saveFilteredTag} />
    </ContainerColumn>
  );
};

export default SearchBar;
