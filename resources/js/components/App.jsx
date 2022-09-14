import React from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Menu from "../pages/Menu";
import Charts from "../pages/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu />} />
                    <Route path="charts" element={<Charts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
