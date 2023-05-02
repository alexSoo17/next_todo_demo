const ALL_TODO_URL =
  "https://next-demo-ec66b-default-rtdb.firebaseio.com/todo.json";

export const getAllTodos = async () => {
  const response = await fetch(ALL_TODO_URL);
  const res = await response.json();
  return res;
};

export const addNewTodo = async (data) => {
  const response = await fetch(
    "https://next-demo-ec66b-default-rtdb.firebaseio.com/todo.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  console.log("Success:", result);
};
