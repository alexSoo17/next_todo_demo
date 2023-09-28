const ALL_TODO_URL = "https://650ab17bdfd73d1fab08b64d.mockapi.io/todolists";

export const getAllTodos = async () => {
  const response = await fetch(ALL_TODO_URL);
  const res = await response.json();
  return res;
};

export const addNewTodo = async (data) => {
  const response = await fetch(
    "https://650ab17bdfd73d1fab08b64d.mockapi.io/todolists",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
};

export const updateTodo = async (data, id) => {
  const response = await fetch(
    `https://650ab17bdfd73d1fab08b64d.mockapi.io/todolists/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(
    `https://650ab17bdfd73d1fab08b64d.mockapi.io/todolists/${id}`,
    {
      method: "DELETE",
    }
  );
  const result = await response.json();
};
