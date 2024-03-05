import { useEffect, useState } from "react";

import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";
import { TodoItemType } from "../types/Todo";

const todoListFromLocalStorage = JSON.parse(
  localStorage.getItem("todoList") || ""
);

export const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>(
    todoListFromLocalStorage
  );

  useEffect(
    () => localStorage.setItem("todoList", JSON.stringify(todoList)),
    [todoList]
  );

  function handleCreateTodo(todo: TodoItemType) {
    setTodoList((prev) => [...prev, todo]);
  }

  return (
    <>
      <CreateTodo onCreateTodo={handleCreateTodo} />
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
