import { Todo } from "../data/todo";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div>
      <p>{todo.task}</p>
    </div>
  );
};

export default TodoItem;
