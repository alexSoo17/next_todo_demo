import TodoItem from "@/components/todoItem";
import styles from "./style.module.scss";
import { getAllTodos } from "@/utils/fetchApi/todo";

export default function TodoList({ todoList }) {
  // Render data...
  return (
    <div className={styles.container}>
      <h1> ALL My todos</h1>
      <div className={styles.cardContainer}>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </div>
    </div>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API

  const data = await getAllTodos();
  const todoList = [];
  for (let key in data) {
    todoList.push({ id: key, ...data[key] });
  }
  // Pass data to the page via props
  return { props: { todoList } };
}
