import Container from "../UI/Container";
import Champion from "./Champion";
const ChampionsList = (props) => {
  return (
    <Container>
      {props.champions
        .filter((champion) => {
          if (props.filterName === "") {
            return champion;
          } else if (
            champion.name.toLowerCase().includes(props.filterName.toLowerCase())
          ) {
            return champion;
          }
        })
        .filter((champion) => {
          if (props.filterTag === "") {
            return champion;
          } else if (
            champion.tag[0]
              .toLowerCase()
              .includes(props.filterTag.toLowerCase())
          ) {
            return champion;
          } else if (props.filterTag === "All") {
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
