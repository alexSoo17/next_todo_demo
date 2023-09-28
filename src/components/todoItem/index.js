import styles from "./style.module.scss";
import { LinearProgress } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import AddDialog from "@/components/addDialog";
import { useState } from "react";
import { deleteTodo } from "@/utils/fetchApi/todo";

function TodoItem({ todo, setUpdated }) {
  const handleUpdate = () => {
    setOpen(true);
  };
  const handleDelete = async () => {
    await deleteTodo(todo.id);
    setUpdated((prev) => !prev);
  };
  const prevFormData = {
    id: todo.id,
    name: todo.name,
    category: todo.category,
    deadline: todo.deadline,
    progress: todo.progress,
    done: todo.done,
  };

  const [open, setOpen] = useState(false);
  const handleDialogClose = () => setOpen(false);

  return (
    <div className={styles.card}>
      <p>
        <span className={styles.title}>name: </span>
        {todo.name}
      </p>
      <p>
        <span className={styles.title}>category:</span>
        {todo.category}
      </p>
      <p className={styles.progress}>
        <span className={styles.title}>progress:</span>
        <LinearProgress
          style={{
            width: "100%",
            height: "10px",
            margin: "0 12px",
          }}
          variant="determinate"
          value={Number(todo.progress)}
        />
        <span className={styles.progress}>{todo.progress}</span>
      </p>

      <p>
        <span className={styles.title}>deadline:</span> {todo.deadline}
      </p>
      <p className={styles.flexBox}>
        <span className={styles.title}>done:</span>
        {todo.done ? (
          <CheckCircleIcon color="primary" />
        ) : (
          <CloseIcon color="primary" />
        )}
      </p>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btn} ${styles.update} ${
            Boolean(todo.done) && styles.done
          }`}
          onClick={handleUpdate}
          disabled={Boolean(todo.done)}
        >
          update
        </button>
        <button
          className={`${styles.btn} ${styles.delete} ${
            Boolean(todo.done) && styles.done
          }`}
          onClick={handleDelete}
          disabled={Boolean(todo.done)}
        >
          delete
        </button>
      </div>
      <AddDialog
        open={open}
        handleClose={handleDialogClose}
        prevFormData={prevFormData}
        setUpdated={setUpdated}
      />
    </div>
  );
}
export default TodoItem;
