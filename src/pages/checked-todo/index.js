import { useState, useEffect } from "react";
import TodoItem from "@/components/todoItem";
import styles from "../todo-list/style.module.scss";
import { getAllTodos } from "@/utils/fetchApi/todo";
import LoadingBox from "@/components/loadingBox";
function CheckedTodo() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAllTodos();
      const todoList = [];
      for (let key in data) {
        if (data[key].done === true) {
          todoList.push({ id: key, ...data[key] });
        }
      }
      setTodos(todoList);
      setIsLoading(false);
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h1> Checked Todos</h1>
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
export default CheckedTodo;
