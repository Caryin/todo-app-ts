import { useState } from "react";

interface CreateTodoProps {
  setTodoList: React.Dispatch<
    React.SetStateAction<{ id: number; todo: string; isChecked: boolean }[]>
  >;
}

export const CreateTodo: React.FC<CreateTodoProps> = ({ setTodoList }) => {
  const [newTodo, setNewTodo] = useState("");

  function handleCreateTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleSubmitTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTodoList((prevList) => [
      ...prevList,
      { id: Math.random(), todo: newTodo, isChecked: false },
    ]);
    setNewTodo("");
  }

  return (
    <form
      className="bg-[#25283D] flex rounded-md mt-14 mb-8 py-6 px-7 gap-5"
      onSubmit={handleSubmitTodo}
    >
      <input
        placeholder="Create a new todo..."
        className="bg-inherit w-full focus:outline-none"
        onChange={handleCreateTodo}
        value={newTodo}
      />
    </form>
  );
};
