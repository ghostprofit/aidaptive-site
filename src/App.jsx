import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TechAudio from "./pages/TechAudio";
import KitchenTools from "./pages/KitchenTools";

export default function App() {
  return (
    <Router>
      <header style={{ padding: "1rem", backgroundColor: "#1a1a1a", color: "#fff" }}>
        <h1>Aidaptive</h1>
        <nav>
          <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
          <Link to="/tech-audio" style={{ margin: "0 10px" }}>Tech & Audio</Link>
          <Link to="/kitchen-tools" style={{ margin: "0 10px" }}>Kitchen Tools</Link>
        </nav>
      </header>
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<h2>Welcome to Aidaptive. Explore top categories.</h2>} />
          <Route path="/tech-audio" element={<TechAudio />} />
          <Route path="/kitchen-tools" element={<KitchenTools />} />
        </Routes>
      </main>
    </Router>
  );
}