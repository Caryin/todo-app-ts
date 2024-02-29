import { useState } from "react";

import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todoList, setTodoList] = useState<
    { id: number; todo: string; isChecked: boolean }[]
  >([]);

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
