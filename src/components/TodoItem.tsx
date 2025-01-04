import { Todo } from "../data/todo";

type TodoItemProps = {
  todo: Todo;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todo, onDelete, onEdit }: TodoItemProps) => {
  return (
    <div>
      <p>
        {todo.task}
        <button
          onClick={() => {
            onEdit(todo.id);
          }}
        >
          edit
        </button>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
        >
          delete
        </button>
      </p>
    </div>
  );
};

export default TodoItem;
