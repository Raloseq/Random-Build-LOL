import { Fragment, useState, useEffect } from "react";
import styles from "./ItemList.module.css";
const ItemList = (props) => {
  const [items, setItems] = useState([]);
  const urlItems =
    "https://ddragon.leagueoflegends.com/cdn/11.12.1/data/en_US/item.json";
  useEffect(() => {
    const getItems = async () => {
      const response = await fetch(urlItems);
      const data = await response.json();
      const items = Object.values(data.data).map(
        ({
          name,
          plaintext,
          tags,
          image,
          gold,
          requiredAlly,
          depth,
          into,
          description,
          inStore,
        }) => ({
          name,
          plaintext,
          tags: tags,
          image: image.full,
          gold: gold.total,
          requiredAlly,
          depth,
          into,
          description,
          inStore,
        })
      );
      setItems(items);
    };
    getItems();
  }, []);

  const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const mythicItems = items.filter((item) => {
    return (
      item.gold > 2000 &&
      item.gold < 4000 &&
      item.into !== undefined &&
      item.requiredAlly === undefined
    );
  });

  const boots = items.filter((item) => {
    return (
      item.plaintext.includes("Movement Speed") &&
      item.into === undefined &&
      item.depth === 2
    );
  });

  const supportItems = items.filter((item) => {
    return item.description.includes("Quest:") && item.inStore === undefined;
  });

  const jungleItems = items.filter((item) =>
    item.description.includes("Jungle")
  );
  const normalItems = items.filter((item) => {
    return (
      item.depth === 3 &&
      item.into === undefined &&
      item.name !== "The Golden Spatula"
    );
  });

  const random = () => {
    const randomItems = [];
    if (mythicItems.length > 0) {
      randomItems.push(sample(mythicItems));
    }
    if (boots.length > 0) {
      randomItems.push(sample(boots));
    }

    if (props.filteredSupport && supportItems.length > 0) {
      randomItems.push(sample(supportItems));
    }

    if (props.filteredJungle && jungleItems.length > 0) {
      randomItems.push(sample(jungleItems));
    }
    return randomItems;
  };

  const combineItems = () => {
    const shuffledNormalItems = shuffleArray(normalItems);
    const finalItems = [];
    finalItems.push(...random(), ...normalItems, ...shuffledNormalItems);
    let finalItemsSliced = [];
    if (props.filteredJungle) {
      finalItemsSliced = finalItems.slice(0, 7);
    } else {
      finalItemsSliced = finalItems.slice(0, 6);
    }

    return finalItemsSliced;
  };

  const finalBuild = combineItems();
  return (
    <Fragment>
      {finalBuild.map((item) => {
        return (
          <img
            key={item.image}
            src={`http://ddragon.leagueoflegends.com/cdn/11.12.1/img/item/${item.image}`}
            alt={`item-${item.name}`}
            className={styles["item-img"]}
          ></img>
        );
      })}
    </Fragment>
  );
};

export default ItemList;
