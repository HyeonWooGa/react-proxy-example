import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Books from "./routes/Books";
import Todos from "./routes/Todos";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <Link to="/books">
            <li>Books</li>
          </Link>
          <Link to="todos">
            <li>Todos</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
