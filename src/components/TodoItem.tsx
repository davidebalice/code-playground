import { Todo } from "../data/todo";

type TodoItemProps = {
  todo: Todo;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const todoItemStyle = {
  width: "100%",
  borderBottom: "1px solid #ddd",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "8px",
  paddingBottom: "8px",
};

const buttonStyle = {
  border: "1px solid #ddd",
  borderRadius: "4px",
  marginRight: "4px",
  fontSize: "12px",
  padding: "4px 20px",
};

const TodoItem = ({ todo, onDelete, onEdit }: TodoItemProps) => {
  return (
    <div style={todoItemStyle}>
      <div>{todo.task}</div>
      <div>
        <button
          onClick={() => {
            onEdit(todo.id);
          }}
          style={buttonStyle}
        >
          edit
        </button>
        <button
          onClick={() => {
            onDelete(todo.id);
          }}
          style={buttonStyle}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
