import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <header>
        <nav>
          <h1>Gizem's Portfolio</h1>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="Projects"> Projects</NavLink>
          <NavLink to="Contact"> Contact</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
