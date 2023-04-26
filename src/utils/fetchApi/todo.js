const ALL_TODO_URL =
  "https://next-demo-ec66b-default-rtdb.firebaseio.com/todo.json";


export const getAllTodos = async () => {
  const res = await fetch(ALL_TODO_URL);
  const data = await res.json();
  return data;
};

