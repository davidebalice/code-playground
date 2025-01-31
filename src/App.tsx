import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Dropdown from "./components/Dropdown";
import ReactExcercises from './components/ReactExcercises';
import JavascriptExcercises from './components/JavascriptExcercises';
import TypescriptExcercises from './components/TypescriptExcercises';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/react" element={<ReactExcercises />} />
        <Route path="/javascript" element={<JavascriptExcercises />} />
        <Route path="/typescript" element={<TypescriptExcercises />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </Router>
  );
}

export default App;
