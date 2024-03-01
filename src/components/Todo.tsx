import { useEffect, useState } from "react";

import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";

const todoListFromLocalStorage = JSON.parse(
  localStorage.getItem("todoList") || ""
);

export const Todo = () => {
  const [todoList, setTodoList] = useState(todoListFromLocalStorage);

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(todoList)),
    [todoList]
  );

  return (
    <>
      <CreateTodo setTodoList={setTodoList} />
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      ) : (
        <div className="flex justify-center pt-6">
          <p className="text-[#A0A3BC]">No item added yet.</p>
        </div>
      )}
    </>
  );
};
