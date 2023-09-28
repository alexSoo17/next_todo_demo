import TodoItem from "@/components/todoItem";
import styles from "../todo-list/style.module.scss";
import { getAllTodos } from "@/utils/fetchApi/todo";

export default function CheckedTodo({ todoList }) {
  return (
    <div className={styles.container}>
      <h1> {todoList.length ? "Already Done!" : "Seems nothing done yet"}</h1>
      <div className={styles.cardContainer}>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await getAllTodos();
  const todoList = [];
  for (let key in res) {
    if (res[key].done === "true") {
      todoList.push({ id: key, ...res[key] });
    }
  }
  return { props: { todoList } };
}
