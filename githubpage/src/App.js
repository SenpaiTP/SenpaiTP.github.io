import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About"; // Import the new page
import Portfolio from "./Pages/Portfolio"; // Your main/home page (or App content)
import "./App.css";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
