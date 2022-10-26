import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import SecretPage from "./pages/SecretPage";
import TablePage from './pages/TablePage';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/interactive-periodic-table/about" element={<AboutPage />} />

                <Route path="/secret" element={<SecretPage />} />
                <Route path="/interactive-periodic-table/secret" element={<SecretPage />} />

                <Route path="/*" element={<TablePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;