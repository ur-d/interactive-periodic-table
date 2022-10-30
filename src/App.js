import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecretPage from "./pages/SecretPage";
import TablePage from './pages/TablePage';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/secret" element={<SecretPage />} />
                <Route path="/*" element={<TablePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;