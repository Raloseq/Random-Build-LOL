import { Link } from "react-router-dom";
import Card from "../UI/Card";
import styles from "./Champions.module.css";

const Champion = ({ id, name }) => {
  return (
    <Link to={`/:${id}`}>
      <Card>
        <h3 className={styles["champion-name"]}>{name}</h3>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/${id}.png`}
          alt={`champion-${name}`}
        />
      </Card>
    </Link>
  );
};

export default Champion;
