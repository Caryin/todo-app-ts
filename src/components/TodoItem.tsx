import { TodoItemType } from "../types/Todo";

interface TodoItemProps {
  todo: TodoItemType;
  onCheckTodo: (id: number) => void;
  onDeleteTodo: (id: number) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onCheckTodo,
  onDeleteTodo,
}) => {
  return (
    <li className="flex py-6 px-7 gap-5 border-b border-gray-700 justify-between">
      <label
        className={`text-[#A0A3BC] flex gap-4 items-center ${
          todo.isChecked ? " line-through text-[#666a89]" : ""
        }`}
      >
        <input
          key={todo.id}
          type="checkbox"
          className="w-6 h-6 accent-violet-500"
          onChange={() => onCheckTodo(todo.id)}
          checked={todo.isChecked}
        />
        {todo.todo}
      </label>
      <button onClick={() => onDeleteTodo(todo.id)}>&#x2716;</button>
    </li>
  );
};
