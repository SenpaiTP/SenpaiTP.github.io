import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import ExperiencesPage from "./Pages/Experiences";

function App() {
    return (
        <Router>
            <Routes>
                {/* Layout route wraps all pages */}
                <Route path="*" element={<MainPage />}>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
