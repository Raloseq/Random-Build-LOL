import styles from "./ContainerColumn.module.css";
const ContainerColumn = (props) => {
  return <div className={styles["container-column"]}>{props.children}</div>;
};

export default ContainerColumn;
