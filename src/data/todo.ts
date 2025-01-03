export type Todo = {
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

export default todosData;
