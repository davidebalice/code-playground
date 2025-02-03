import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Dropdown from "./components/Dropdown";
import ReactPlayground from './components/ReactPlayground';
import JavascriptPlayground from './components/JavascriptPlayground';
import TypescriptPlayground from './components/TypescriptPlayground';
import PhpPlayground from './components/PhpPlayground';
import SqlPlayground from './components/SqlPlayground';
import NodePlayground from './components/NodePlayground';

function App() {
  const [demo, setDemo] = useState(false);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactPlayground demo={demo}/>} />
        <Route path="/javascript" element={<JavascriptPlayground demo={demo}/>} />
        <Route path="/typescript" element={<TypescriptPlayground demo={demo} />} />
        <Route path="/php" element={<PhpPlayground demo={demo}/>} />
        <Route path="/sql" element={<SqlPlayground demo={demo}/>} />
        <Route path="/node" element={<NodePlayground demo={demo}/>} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </Router>
  );
}

export default App;
import { useState } from "react";

