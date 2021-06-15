import { Link } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Champions.module.css";

const Champion = (props) => {
  return (
    <Link to={`/:${props.id}`}>
      <Card>
        <h3 className={styles["champion-name"]}>{props.name}</h3>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/${props.id}.png`}
          alt={`champion-${props.name}`}
        />
      </Card>
    </Link>
  );
};

export default Champion;
