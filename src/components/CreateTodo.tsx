import { useState } from "react";
import { TodoItemType } from "../types/Todo";

interface CreateTodoProps {
  onCreateTodo: (todo: TodoItemType) => void;
}

export const CreateTodo: React.FC<CreateTodoProps> = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleCreateTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (newTodo === "") return;

    onCreateTodo({ id: Math.random(), todo: newTodo, isChecked: false });

    setNewTodo("");
  }

  return (
    <form
      className="bg-[#25283D] flex rounded-md mt-14 mb-8 py-6 px-7 gap-5"
      onSubmit={handleCreateTodo}
    >
      <input
        placeholder="Create a new todo..."
        className="bg-inherit w-full focus:outline-none"
        onChange={handleInputChange}
        value={newTodo}
      />
    </form>
  );
};
