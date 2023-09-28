import TodoItem from "@/components/todoItem";
import styles from "./style.module.scss";
import { getAllTodos } from "@/utils/fetchApi/todo";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [updated, setUpdated] = useState(false);
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodoList = async () => {
      const data = await getAllTodos();
      const todoList = [];
      for (let key in data) {
        todoList.push({ id: key, ...data[key] });
      }
      setTodoList(todoList);
    };
    fetchTodoList();
  }, [updated]);

  return (
    <div className={styles.container}>
      <h1> ALL My todos</h1>
      <div className={styles.cardContainer}>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} setUpdated={setUpdated} />;
        })}
      </div>
    </div>
  );
}
