import Container from "../UI/Container";
import Champion from "./Champion";
const ChampionsList = ({ champions, filterName, filterTag }) => {
  return (
    <Container>
      {champions
        .filter((champion) => {
          if (filterName === "") {
            return champion;
          } else if (
            champion.name.toLowerCase().includes(filterName.toLowerCase())
          ) {
            return champion;
          }
        })
        .filter((champion) => {
          if (filterTag === "") {
            return champion;
          } else if (
            champion.tag[0].toLowerCase().includes(filterTag.toLowerCase())
          ) {
            return champion;
          } else if (filterTag === "All") {
            return champion;
          }
        })
        .map((champion) => {
          return (
            <Champion
              key={champion.id}
              id={champion.id}
              name={champion.name}
              image={champion.image}
              tag={champion.tag}
            />
          );
        })}
    </Container>
  );
};

export default ChampionsList;
