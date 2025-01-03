import { useState } from "react";
import TodoItem from "../components/TodoItem.tsx";
import todosData, { Todo } from "../data/todo.ts";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(todosData);
  const [displayForm, setDisplayForm] = useState(false);
  const showNewTodo = () => {
    setDisplayForm(!displayForm);
  };

  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.task.trim()) {
      alert("Field task is empty");
      return;
    }

    const newTodo: Todo = {
      id: todos.length + 1,
      task: formData.task,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);

    setFormData({
      ...formData,
      task: "",
    });
  };

  return (
    <div>
      <button onClick={() => showNewTodo()}>new task</button>
      <div style={{ display: displayForm ? "block" : "none" }}>
        <form>
          <input
            type="text"
            name="task"
            value={formData.task}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>send</button>
        </form>
      </div>
      <h1>Todo List</h1>

      {todos
        .slice() // Crea una copia per evitare di modificare l'array originale
        .sort((a, b) => b.id - a.id) // Ordina in base all'id in ordine decrescente
        .map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default Todos;
