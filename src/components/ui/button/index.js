import styles from "./style.module.scss";
function BigButton(props) {
  return (
    <button className={styles.button} onClick={props.handleClick}>
      {props.children}
    </button>
  );
}
export default BigButton;
