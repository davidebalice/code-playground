import { useState } from "react";
import TodoItem from "../components/TodoItem";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

const todosData: Todo[] = [
  { id: 1, task: "Working", completed: false },
  { id: 2, task: "Clean the house", completed: true },
  { id: 3, task: "Study React", completed: false },
  { id: 4, task: "Shopping", completed: false },
  { id: 5, task: "Go to jim", completed: true },
];

export const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(todosData);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [formData, setFormData] = useState({ task: "" });
  const [formEditData, setEditFormData] = useState({ id: 0, task: "" });

  const showNewTodo = () => setDisplayForm(!displayForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setDisplayEditForm(true);
      setEditFormData({ id: todoToEdit.id, task: todoToEdit.task });
    }
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
    setFormData({ task: "" });
    setDisplayForm(false);
  };

  const handleUpdateSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formEditData.task.trim()) {
      alert("Field task is empty");
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === formEditData.id
          ? { ...item, task: formEditData.task }
          : item
      )
    );

    setEditFormData({ id: 0, task: "" });
    setDisplayEditForm(false);
  };

  const formStyle = {
    marginTop: "20px",
    marginBottom: "20px",
  };

  const inputStyle = {
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginRight: "4px",
    fontSize: "13px",
    padding: "4px 20px",
  };

  const titleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    border: "1px solid #ddd",
    borderRadius: "4px",
    marginRight: "4px",
    fontSize: "12px",
    padding: "4px 20px",
  };

  return (
    <div style={{padding:"30px"}}>
      <button onClick={showNewTodo} style={buttonStyle}>
        + New task
      </button>
      {displayForm && (
        <div>
          <form onSubmit={handleSubmit} style={formStyle}>
            <input
              type="text"
              name="task"
              value={formData.task}
              onChange={handleChange}
              placeholder="Enter a task"
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Add</button>
          </form>
        </div>
      )}

      {displayEditForm && (
        <div>
          <form onSubmit={handleUpdateSubmit} style={formStyle}>
            <input type="hidden" name="id" value={formEditData.id} readOnly />
            <input
              type="text"
              name="task"
              value={formEditData.task}
              onChange={handleEditChange}
              placeholder="Edit task"
              style={inputStyle}
            />
            <button type="submit" style={buttonStyle}>Update</button>
          </form>
        </div>
      )}

      <h1 style={titleStyle}>Todo List</h1>
      {todos
        .slice()
        .sort((a, b) => b.id - a.id)
        .map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
    </div>
  );
};

export default Todos;
