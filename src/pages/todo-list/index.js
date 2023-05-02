import TodoItem from "@/components/todoItem";
import styles from "./style.module.scss";
import { getAllTodos } from "@/utils/fetchApi/todo";
import { useEffect, useState } from "react";
import LoadingBox from "@/components/loadingBox";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAllTodos();
      const todoList = [];
      for (let key in data) {
        todoList.push({ id: key, ...data[key] });
      }
      setTodos(todoList);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h1> ALL My todos</h1>
      {isLoading ? (
        <LoadingBox />
      ) : (
        <div className={styles.cardContainer}>
          {todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </div>
      )}
    </div>
  );
}
export default TodoList;
