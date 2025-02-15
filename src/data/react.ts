import { v4 as uuidv4 } from "uuid";

export const exercises = [
  {
    category: "Hooks",
    exercises: [
      {
        id: uuidv4(),
        title: "Uso di useState",
        executable: true,
        description:
          "Crea un componente che utilizza useState per gestire un contatore.",
        code: `import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};`,
      },
      {
        id: uuidv4(),
        title: "Uso di useEffect",
        executable: true,
        description:
          "Crea un componente che esegue un'operazione al montaggio e aggiornamento.",
        code: `import { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return <p>Tempo trascorso: {time}s</p>;
};`,
      },
      {
        id: uuidv4(),
        title: "Uso di useContext",
        executable: false,
        description:
          "Crea un contesto globale per gestire lo stato di autenticazione dell'utente.",
        code: `import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);`,
      },
      {
        id: uuidv4(),
        title: "Uso di useReducer",
        executable: true,
        description:
          "Gestisci lo stato complesso usando useReducer invece di useState.",
        code: `import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contatore: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementa</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementa</button>
    </div>
  );
};`,
      },
    ],
  },

  {
    category: "Projects",
    exercises: [
      {
        id: uuidv4(),
        title: "Todos",
        executable: true,
        description: "Create a todo management app",
        code: `
      
import { useState } from "react";

const todosData = [
  { id: 1, task: "Working", completed: false },
  { id: 2, task: "Clean the house", completed: true },
  { id: 3, task: "Study React", completed: false },
  { id: 4, task: "Shopping", completed: false },
  { id: 5, task: "Go to jim", completed: true },
];

export const Todos = () => {
  const [todos, setTodos] = useState(todosData);
  const [displayForm, setDisplayForm] = useState(false);
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [formData, setFormData] = useState({ task: "" });
  const [formEditData, setEditFormData] = useState({ id: 0, task: "" });

  const showNewTodo = () => setDisplayForm(!displayForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setDisplayEditForm(true);
      setEditFormData({ id: todoToEdit.id, task: todoToEdit.task });
    }
  };

  const handleSubmit = (event) => {
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

  const handleUpdateSubmit = (event) => {
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

  const todoItemStyle = {
    width:"100%",
    borderBottom:"1px solid #ddd",
    display:"flex",
    justifyContent:"space-between",
    marginBottom: "8px",
    paddingBottom: "8px",
  }

  const buttonStyle = {
    border:"1px solid #ddd",
    borderRadius : "4px",
    marginRight: "4px",
    fontSize: "12px",
    padding:"4px 20px",
  }

 const formStyle = {
    marginTop: "20px",
    marginBottom: "20px",
  }

 const inputStyle = {
    border:"1px solid #ddd",
    borderRadius : "4px",
    marginRight: "4px",
    fontSize: "13px",
    padding:"4px 20px",
  }

  const titleStyle = {
      fontSize: "22px",
      fontWeight: "bold",
      marginTop: "20px",
      marginBottom: "20px"
  }

  const TodoItem = ({ todo, onDelete, onEdit }) => {
    return (
      <div style={todoItemStyle}>
        <div>
          {todo.task}
        </div>
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

  return (
    <div>
      <button onClick={showNewTodo} style={buttonStyle}> + New task</button>
      {displayForm && (
        <div style={formStyle}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="task"
              style={inputStyle}
              value={formData.task}
              onChange={handleChange}
              placeholder="Enter a task"
            />
            <button type="submit" style={{ ...buttonStyle, marginLeft: "5px" }}>Add</button>
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
              style={inputStyle}
              placeholder="Edit task"
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

    
        
        `,
      },
    ],
  },

  {
    category: "Components",
    exercises: [
      {
        id: uuidv4(),
        title: "Componente con props",
        executable: true,
        description:
          "Crea un componente che accetta delle props per visualizzare un messaggio.",
        code: `
const Greeting = ({ name, surname }) => {
  return <h3>Benvenuto {name} {surname}</h3>;
}

export const App = () => {
  return <Greeting name="Mario" surname="Rossi" />;
};`,
      },
      {
        id: uuidv4(),
        title: "Lista dinamica",
        executable: true,
        description:
          "Crea un componente che riceve un array di elementi e li visualizza.",
        code: `export const List = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
      },
    ],
  },
  {
    category: "Gestione dello stato",
    exercises: [
      {
        id: uuidv4(),
        title: "Uso di useReducer",
        executable: true,
        description:
          "Implementa un contatore utilizzando useReducer invece di useState.",
        code: `import { useReducer } from 'react';
 
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contatore: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};`,
      },
    ],
  },

  {
    category: "Array",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Estrai i dati da un array",
        description:
          "Estrai i dati da un array senza conoscere chiavi o valori",
        code: `
import React from "react";


export const ArrayCycle = () => {
const data = [ { "user_id": "1", "username": "mariorossi", "order_id": "1", "order_date": "2025-02-01 20:27:30" }, { "user_id": "2", "username": "luigiverdi", "order_id": "2", "order_date": "2025-02-01 20:27:30" }, { "user_id": "1", "username": "mariorossi", "order_id": "3", "order_date": "2025-02-01 20:27:30" }, { "user_id": "3", "username": "giuseppeneri", "order_id": "4", "order_date": "2025-02-01 20:27:30" }, { "user_id": "4", "username": "marcobianchi", "order_id": "5", "order_date": "2025-02-01 20:27:30" } ];

  if (!data || data.length === 0) {
    return <p>Nessun dato disponibile</p>;
  }

  return (
    <div>
      <h2>Data Output</h2>
      <table cellPadding="8" cellSpacing="8">
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={index}>
             {Object.entries(obj).map(([key, value], i) => (
                <td key={i}>
                  {(() => {
                    // Controlliamo se la colonna si chiama 'id' per evitare conversioni errate
                    if (key.toLowerCase().includes("id")) {
                      return value;
                    }
                    
                    // Controlliamo se è un timestamp realistico (> 1970)
                    if (typeof value === "number" && value > 1000000000 && value < 9999999999999) {
                      return new Date(value).toLocaleDateString();
                    }

                    // Controlliamo se è una stringa che rappresenta una data
                    if (typeof value === "string" && !isNaN(Date.parse(value))) {
                      return new Date(value).toLocaleDateString();
                    }

                    // Se non è una data, restituiamo il valore normale
                    return value;
                  })()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};`,
      },
    ],
  },

  {
    category: "Gestione Input e Form",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Form Complesso con Validazione",
        description:
          "Crea un form complesso con numerosi campi (nome, email, password, telefono, indirizzo, città, CAP) e validazione dei dati.",
        code: `import { useState } from 'react';

export const ComplexForm = () => {
  // Stato per i dati del form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    zip: ""
  });

  // Stato per gli errori di validazione
  const [errors, setErrors] = useState({});

  // Gestione della modifica degli input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Funzione di validazione
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Il nome è obbligatorio.";
    if (!formData.email) newErrors.email = "L'email è obbligatoria.";
    else if (!/\\S+@\\S+\\.\\S+/.test(formData.email))
      newErrors.email = "L'email non è valida.";
    if (!formData.password) newErrors.password = "La password è obbligatoria.";
    if (!formData.phone) newErrors.phone = "Il telefono è obbligatorio.";
    if (!formData.address) newErrors.address = "L'indirizzo è obbligatorio.";
    if (!formData.city) newErrors.city = "La città è obbligatoria.";
    if (!formData.zip) newErrors.zip = "Il CAP è obbligatorio.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestione della submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Qui invieresti i dati al server o eseguirai altre logiche
      alert("Form inviato: " + JSON.stringify(formData, null, 2));
    }
  };

  return (
   <form onSubmit={handleSubmit} className="container mt-4 p-4">
      <h2 className="mb-4 text-center">Modulo di Registrazione</h2>

      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          value={formData.name} 
          onChange={handleChange}
          className="form-control"
          placeholder="Inserisci il nome" 
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={formData.email} 
          onChange={handleChange}
          className="form-control"
          placeholder="Inserisci l'email" 
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          value={formData.password} 
          onChange={handleChange}
          className="form-control"
          placeholder="Inserisci la password" 
        />
        {errors.password && <small className="text-danger">{errors.password}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefono</label>
        <input 
          type="tel" 
          name="phone" 
          id="phone"
          value={formData.phone} 
          onChange={handleChange}
          className="form-control"
          placeholder="Inserisci il telefono" 
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="address">Indirizzo</label>
        <input 
          type="text" 
          name="address" 
          id="address"
          value={formData.address} 
          onChange={handleChange}
          className="form-control"
          placeholder="Inserisci l'indirizzo" 
        />
        {errors.address && <small className="text-danger">{errors.address}</small>}
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="city">Città</label>
          <input 
            type="text" 
            name="city" 
            id="city"
            value={formData.city} 
            onChange={handleChange}
            className="form-control"
            placeholder="Inserisci la città" 
          />
          {errors.city && <small className="text-danger">{errors.city}</small>}
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="zip">CAP</label>
          <input 
            type="text" 
            name="zip" 
            id="zip"
            value={formData.zip} 
            onChange={handleChange}
            className="form-control"
            placeholder="Inserisci il CAP" 
          />
          {errors.zip && <small className="text-danger">{errors.zip}</small>}
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block mt-3">
        Invia
      </button>
    </form>
  );
};
`,
      },

      {
        id: uuidv4(),
        title: "Form con gestione dei file",
        executable: true,
        description: "Crea un form che permette agli utenti di caricare file.",
        code: `import { useState } from 'react';

export const FileUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('File selezionato:', file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Carica un file:
        <input type="file" onChange={handleFileChange} />
      </label>
      <button type="submit">Carica</button>
    </form>
  );
};`,
      },
      {
        id: uuidv4(),
        title: "Form con gestione dei checkbox",
        executable: true,
        description:
          "Crea un form che permette la selezione di più opzioni con checkbox.",
        code: `import { useState } from 'react';

export const CheckboxForm = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedOptions((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Opzioni selezionate: ' + selectedOptions.join(', '));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="checkbox"
          value="Option 1"
          onChange={handleCheckboxChange}
        />
        Opzione 1
      </label>
      <label>
        <input
          type="checkbox"
          value="Option 2"
          onChange={handleCheckboxChange}
        />
        Opzione 2
      </label>
      <button type="submit">Invia</button>
    </form>
  );
};`,
      },
    ],
  },

  {
    category: "Hooks Avanzati",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Custom Hook: useDebounce",
        description:
          "Crea un custom hook che debounce il valore di un input per evitare chiamate eccessive.",
        code: `import { useState, useEffect } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

// Esempio di utilizzo
export const DebounceExample = () => {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);
  
  return (
    <div>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="Digita qualcosa..." />
      <p>Valore debounce: {debouncedText}</p>
    </div>
  );
};
`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Custom Hook: useFetch",
        description:
          "Crea un custom hook per effettuare richieste fetch con gestione di loading, error e caching.",
        code: `import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(json => {
        if (isMounted) {
          setData(json);
          setLoading(false);
        }
      })
      .catch(err => {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      });
    return () => { isMounted = false; };
  }, [url]);

  return { data, loading, error };
};

// Esempio di utilizzo
export const FetchExample = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
`,
      },
    ],
  },
  {
    category: "Context e State Management",
    exercises: [
      {
        id: uuidv4(),
        executable: false,
        title: "Theme Context",
        description:
          "Implementa un contesto per gestire i temi (light/dark) nell'applicazione.",
        code: `import React, { createContext, useState, useContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const style = {
    background: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center'
  };
  return (
    <div style={style}>
      <p>Il tema corrente è: {theme}</p>
      <button onClick={toggleTheme}>Cambia Tema</button>
    </div>
  );
};
`,
      },
      {
        id: uuidv4(),
        executable: false,
        title: "Redux-like State Management con useReducer",
        description:
          "Implementa una gestione dello stato simile a Redux utilizzando useReducer e Context.",
        code: `import React, { useReducer, createContext, useContext } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment': return { count: state.count + 1 };
    case 'decrement': return { count: state.count - 1 };
    default: throw new Error('Azione sconosciuta');
  }
};

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const CounterComponent = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <p>Contatore: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementa</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementa</button>
    </div>
  );
};
`,
      },
    ],
  },
  {
    category: "Routing e Navigazione",
    exercises: [
      {
        id: uuidv4(),
        executable: false,
        title: "Routing Base con React Router",
        description:
          "Crea una semplice applicazione che utilizza React Router per navigare tra pagine.",
        code: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;

export const AppRouter = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
`,
      },
      {
        id: uuidv4(),
        executable: false,
        title: "Route Parametrizzati",
        description:
          "Crea una pagina che mostra dettagli in base al parametro passato nella rotta.",
        code: `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

const UserDetail = () => {
  const { userId } = useParams();
  return <h2>Dettaglio utente: {userId}</h2>;
};

export const UserRouter = () => (
  <Router>
    <nav>
      <Link to="/user/1">Utente 1</Link> | <Link to="/user/2">Utente 2</Link>
    </nav>
    <Routes>
      <Route path="/user/:userId" element={<UserDetail />} />
    </Routes>
  </Router>
);
`,
      },

      {
        id: uuidv4(),
        executable: false,
        title: "Routing dinamico con React Router",
        description:
          "Crea un'app che gestisce le rotte dinamiche con React Router.",
        code: `import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
    
    const Home = () => <h2>Home</h2>;
    const Profile = ({ match }) => <h2>Profilo di {match.params.username}</h2>;
    
    export const App = () => {
      return (
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile/johndoe">Profilo di John</Link>
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/profile/:username" component={Profile} />
        </Router>
      );
    };`,
      },
    ],
  },
  {
    category: "Performance e Ottimizzazione",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "React.memo e useMemo",
        description:
          "Ottimizza un componente con React.memo e usa useMemo per evitare ricalcoli inutili in operazioni costose.",
        code: `import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = React.memo(({ value }) => {
  const computedValue = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += value * i;
    }
    return result;
  }, [value]);

  return <div>Risultato Computato: {computedValue}</div>;
});

export const MemoExample = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
      <ExpensiveCalculation value={value} />
    </div>
  );
};
`,
      },
    ],
  },
  {
    category: "Error Handling e Boundaries",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Error Boundary",
        description:
          "Crea un componente Error Boundary per catturare errori nel tree dei componenti e mostrarne un messaggio.",
        code: `import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error("Errore catturato:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <h2>Qualcosa è andato storto: {this.state.error.message}</h2>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
`,
      },
    ],
  },
  {
    category: "State Management",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Gestione stato globale con Redux",
        description:
          "Imposta una store Redux per gestire lo stato di una lista di oggetti.",
        code: `import { createStore } from 'redux';

// Reducer
const initialState = { items: [] };
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}

// Store
const store = createStore(reducer);

store.dispatch({ type: 'ADD_ITEM', payload: 'Elemento 1' });
console.log(store.getState());`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Gestione stato con Context API",
        description:
          "Crea un contesto globale per gestire un tema scuro/chiaro in tutta l'app.",
        code: `import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);`,
      },
    ],
  },
  {
    category: "Performance",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Memorizzazione del componente con React.memo",
        description:
          "Usa React.memo per ottimizzare il rendering di un componente.",
        code: `import React, { useState } from 'react';

const Button = React.memo(({ onClick }) => {
  console.log('Rendering Button');
  return <button onClick={onClick}>Clicca</button>;
});

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setCount(count + 1)} />
      <p>Contatore: {count}</p>
    </div>
  );
};`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Lazy Loading dei componenti",
        description:
          "Implementa il caricamento ritardato di un componente usando React.lazy.",
        code: `import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

export const App = () => {
  return (
    <Suspense fallback={<div>Caricamento...</div>}>
      <LazyComponent />
    </Suspense>
  );
};`,
      },
    ],
  },
  {
    category: "Testing",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Test di un componente con Jest",
        description: "Scrivi un test unitario per un componente Counter.",
        code: `import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('renders the counter and increments on button click', () => {
  render(<Counter />);
  const button = screen.getByText(/Incrementa/i);
  const counter = screen.getByText(/Contatore: 0/i);
  fireEvent.click(button);
  expect(screen.getByText(/Contatore: 1/i)).toBeInTheDocument();
});`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Test di un hook personalizzato con Jest",
        description: "Scrivi un test per un hook personalizzato useCounter.",
        code: `import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  expect(result.current.count).toBe(0);
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(1);
});`,
      },
    ],
  },

  {
    category: "Advanced Concepts",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Gestione di errori con Error Boundaries",
        description:
          "Crea un componente che gestisce gli errori in modo elegante usando Error Boundaries.",
        code: `import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Qualcosa è andato storto.</h1>;
    }
    return this.props.children;
  }
}

export const App = () => {
  return (
    <ErrorBoundary>
      <ComponentThatMayThrow />
    </ErrorBoundary>
  );
};`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Memoizzazione delle funzioni con useCallback",
        description:
          "Usa useCallback per ottimizzare la memoizzazione delle funzioni in un componente.",
        code: `import { useState, useCallback } from 'react';

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <ChildComponent increment={increment} />
      <p>Contatore: {count}</p>
    </div>
  );
};

const ChildComponent = React.memo(({ increment }) => {
  console.log('Rendering Child');
  return <button onClick={increment}>Incrementa</button>;
});`,
      },
    ],
  },
  {
    category: "Performance",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Ottimizzazione del rendering con React.memo e useCallback",
        description:
          "Usa React.memo e useCallback per evitare rendering non necessari.",
        code: `import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Rendering Child');
  return <button onClick={onClick}>Incrementa</button>;
});

export const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <ChildComponent onClick={increment} />
      <p>Contatore: {count}</p>
    </div>
  );
};`,
      },
    ],
  },

  {
    category: "Component Design",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Componente di lista riutilizzabile",
        description:
          "Crea un componente che renderizza una lista di elementi e supporta l'ordinamento.",
        code: `import { useState } from 'react';

export const SortableList = ({ items }) => {
  const [sortedItems, setSortedItems] = useState(items);

  const sortItems = () => {
    setSortedItems((prevItems) =>
      [...prevItems].sort((a, b) => a.localeCompare(b))
    );
  };

  return (
    <div>
      <button onClick={sortItems}>Ordina</button>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};`,
      },
    ],
  },
  {
    category: "TypeScript",
    exercises: [
      {
        id: uuidv4(),
        executable: true,
        title: "Componenti in TypeScript con props",
        description:
          "Crea un componente in TypeScript che accetta delle props fortemente tipizzate.",
        code: `import React from 'react';

interface Props {
  name: string;
  age: number;
}

const Person: React.FC<Props> = ({ name, age }) => {
  return <div>{name} ha {age} anni</div>;
};

export default Person;`,
      },
      {
        id: uuidv4(),
        executable: true,
        title: "Gestione dello stato con useState in TypeScript",
        description:
          "Usa useState con TypeScript per tipizzare lo stato di un contatore.",
        code: `import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Contatore: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementa</button>
    </div>
  );
};`,
      },
    ],
  },
];

/*





// Esercizio 5: useMemo per calcoli costosi
export const ExpensiveCalculation = () => {
  const [num, setNum] = useState(2);
  const squared = useMemo(() => num * num, [num]);
  return <div>Quadrato di {num}: {squared}</div>;
};

// Esercizio 6: useCallback per memorizzare funzioni
export const CallbackExample = () => {
  const handleClick = useCallback(() => alert("Cliccato!"), []);
  return <button onClick={handleClick}>Click Me</button>;
};

// Esercizio 7: Toggle visibilità
export const ToggleVisibility = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Mostrato!</p>}
    </div>
  );
};

// Esercizio 8: Contatore con passo personalizzato
export const StepCounter = () => {
  const [count, setCount] = useState(0);
  const step = 5;
  return <button onClick={() => setCount(count + step)}>Conta: {count}</button>;
};

// Esercizio 9: Lista dinamica
export const DynamicList = () => {
  const [items, setItems] = useState<string[]>([]);
  return (
    <div>
      <button onClick={() => setItems([...items, \`Item \${items.length + 1}\`])}>Aggiungi</button>
      <ul>{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </div>
  );
};

// Esercizio 10: Cambio di tema
export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "bg-black text-white" : "bg-white text-black"}>
      <button onClick={() => setDark(!dark)}>Cambia Tema</button>
    </div>
  );
};




export default `
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

// Esercizio 1: Contatore con useState
export const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Conta: {count}</button>;
};

// Esercizio 2: Effetto collaterale con useEffect
export const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return <div>Secondi: {seconds}</div>;
};

`
*/
