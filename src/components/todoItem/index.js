import styles from "./style.module.scss";
import { LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
function TodoItem({ todo }) {
  return (
    <div className={styles.card}>
      <p>name: {todo.name}</p>
      <p>category: {todo.category}</p>
      {todo.progress && (
        <p className={styles.progress}>
          progress:
          <LinearProgress
            style={{ width: "100%", height: "10px", margin: "0 5px" }}
            variant="determinate"
            value={Number(todo.progress.split("%")[0])}
          />
          <span>{todo.progress}</span>
        </p>
      )}

      <p>deadline: {todo.deadline}</p>
      <p className={styles.flexBox}>
        done:
        {todo.done ? (
          <CheckCircleIcon color="primary" />
        ) : (
          <CloseIcon color="primary" />
        )}
      </p>
    </div>
  );
}
export default TodoItem;
