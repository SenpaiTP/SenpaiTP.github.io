import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";

function App() {
    return (
        <Router>
            <Routes>
                {/* Layout route wraps all pages */}
                <Route path="/" element={<SideBar />}>
                    <Route index element={<Portfolio />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
