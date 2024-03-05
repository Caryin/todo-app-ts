import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { TodoItemType } from "../types/Todo";

interface TodoListProps {
  todoList: TodoItemType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItemType[]>>;
}

type TabType = "All" | "Active" | "Completed";

export const TodoList: React.FC<TodoListProps> = ({
  todoList,
  setTodoList,
}) => {
  const [selectedTab, setSelectedTab] = useState<TabType>("All");

  function handleCheckTodo(todoId: number) {
    setTodoList((curList) =>
      curList.map((todo) =>
        todo.id === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  function handleDeleteTodo(deleteId: number) {
    setTodoList((curList) => curList.filter((todo) => todo.id !== deleteId));
  }

  function handleClearCompletedTodo() {
    const activeTodos = todoList.filter((todo) => !todo.isChecked);
    setTodoList(activeTodos);
  }

  const itemsLeft = todoList.filter((i) => !i.isChecked)?.length;

  let filteredList;
  if (selectedTab === "Active") {
    filteredList = todoList.filter((todo) => !todo.isChecked);
  } else if (selectedTab === "Completed") {
    filteredList = todoList.filter((todo) => todo.isChecked);
  } else {
    filteredList = todoList;
  }

  return (
    <div className="bg-[#25283D] rounded-md">
      {filteredList.length < 1 && (
        <div className="flex py-6 px-7 gap-5 border-b border-gray-700 justify-center">
          <p className="text-[#A0A3BC]">No {selectedTab.toLowerCase()} item.</p>
        </div>
      )}

      <ul>
        {filteredList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckTodo={handleCheckTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>

      <div className="flex justify-between items-center p-6 text-xs text-[#666a89] font-medium">
        <div>
          <span>{itemsLeft} active items</span>
        </div>
        <div className="flex gap-4 text-xs">
          <button
            onClick={() => setSelectedTab("All")}
            className={selectedTab === "All" ? "text-blue-500 " : ""}
          >
            All
          </button>
          <button
            onClick={() => setSelectedTab("Active")}
            className={selectedTab === "Active" ? "text-blue-500 " : ""}
          >
            Active
          </button>
          <button
            onClick={() => setSelectedTab("Completed")}
            className={selectedTab === "Completed" ? "text-blue-500 " : ""}
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
