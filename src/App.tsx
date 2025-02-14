import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AngularPlayground from "./components/AngularPlayground";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./components/Home";
import JavascriptPlayground from "./components/JavascriptPlayground";
import Navbar from "./components/Navbar";
import NodePlayground from "./components/NodePlayground";
import NosqlPlayground from "./components/NosqlPlayground";
import PhpPlayground from "./components/PhpPlayground";
import ReactPlayground from "./components/ReactPlayground";
import Secret from "./components/Secret";
import SqlPlayground from "./components/SqlPlayground";
import Todos from "./components/Todos";
import TypescriptPlayground from "./components/TypescriptPlayground";
import Wrapper from "./components/Wrapper";

function App() {
  const [demo, setDemo] = useState(true);
  const [secretKey, setSecretKey] = useState("");
  const [error, setError] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const secret = import.meta.env.VITE_SECRET_CODE;

  useEffect(() => {
    if (secret === secretKey) {
      setDemo(false);
      setError(false);
    } else {
      if (secretKey !== "") {
        setError(true);
      }
      setDemo(true);
    }
  }, [secretKey]);

  return (
    <Router>
      <Navbar />
      {showSecret && <Secret setSecretKey={setSecretKey} error={error} />}
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/react" element={<ReactPlayground demo={demo} setShowSecret={setShowSecret} />} />
          <Route
            path="/javascript"
            element={<JavascriptPlayground demo={demo} />}
          />
          <Route
            path="/typescript"
            element={<TypescriptPlayground demo={demo} />}
          />
          <Route path="/angular" element={<AngularPlayground demo={demo} />} />
          <Route path="/php" element={<PhpPlayground demo={demo} />} />
          <Route path="/sql" element={<SqlPlayground demo={demo} />} />
          <Route path="/node" element={<NodePlayground demo={demo} />} />
          <Route path="/nosql" element={<NosqlPlayground demo={demo} />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/dropdown" element={<Dropdown />} />
        </Routes>
      </Wrapper>
      <Footer />
    </Router>
  );
}

export default App;
