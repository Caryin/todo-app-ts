import { useState } from "react";

interface TodoListProps {
  todoList: { id: number; todo: string; isChecked: boolean }[];
  setTodoList: React.Dispatch<
    React.SetStateAction<{ id: number; todo: string; isChecked: boolean }[]>
  >;
}

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
}) => {
  const [isActive, setIsActive] = useState("All");

  function handleCheckTodo(todoId: number) {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  function handleClearCompletedTodo() {
    const activeTodos = todoList.filter((todo) => todo.isChecked === false);
    setTodoList(activeTodos);
    setIsActive("All");
  }

  const itemsLeft = todoList.filter((i) => i.isChecked === false)?.length;

  let filteredList;
  if (isActive === "Active") {
    filteredList = todoList.filter((todo) => todo.isChecked === false);
  } else if (isActive === "Completed") {
    filteredList = todoList.filter((todo) => todo.isChecked === true);
  } else {
    filteredList = todoList;
  }

  return (
    <div className="bg-[#25283D] rounded-md">
      <ul>
        {filteredList.length < 1 && (
          <div className="flex py-6 px-7 gap-5 border-b border-gray-700 justify-center">
            <p className="text-[#A0A3BC]">No {isActive.toLowerCase()} item.</p>
          </div>
        )}
        {filteredList.map((todo) => (
          <li
            className={`flex py-6 px-7 gap-5 border-b border-gray-700 ${
              todo.isChecked ? "line-through text-[#666a89]" : ""
            }`}
            key={todo.id}
          >
            <label
              className={`text-[#A0A3BC] flex gap-4 items-center ${
                todo.isChecked ? "text-[#666a89]" : ""
              }`}
            >
              <input
                key={todo.id}
                type="checkbox"
                className="w-6 h-6"
                onChange={() => handleCheckTodo(todo.id)}
                checked={todo.isChecked === true}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center p-6 text-xs text-[#666a89] font-medium">
        <div>
          <span>{itemsLeft} active items</span>
        </div>
        <div className="flex gap-4 text-xs">
          <button
            onClick={() => setIsActive("All")}
            value={isActive}
            className={isActive === "All" ? "text-blue-500 " : ""}
          >
            All
          </button>
          <button
            onClick={() => setIsActive("Active")}
            value={isActive}
            className={isActive === "Active" ? "text-blue-500 " : ""}
          >
            Active
          </button>
          <button
            onClick={() => setIsActive("Completed")}
            value={isActive}
            className={isActive === "Completed" ? "text-blue-500 " : ""}
          >
            Completed
          </button>
        </div>
        <div>
          <button
            className="hover:text-[#757a9c]"
            onClick={handleClearCompletedTodo}
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
};
