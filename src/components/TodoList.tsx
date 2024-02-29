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
  function handleCheckTodo(todoId: number) {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === todoId ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  }

  return (
    <div className="bg-[#25283D] rounded-md">
      <ul>
        {todoList.map((todo) => (
          <li
            className={`flex py-6 px-7 gap-5 border-b border-gray-700 ${
              todo.isChecked ? "line-through" : ""
            }`}
            key={todo.id}
          >
            <label className="text-[#A0A3BC] flex gap-4 items-center">
              <input
                key={todo.id}
                type="checkbox"
                className="w-6 h-6"
                onChange={() => handleCheckTodo(todo.id)}
              />
              {todo.todo}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
