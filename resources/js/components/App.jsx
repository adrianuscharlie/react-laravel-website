import React from "react";
import { useState } from "react";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import Menu from "../pages/Menu";
import Charts from "../pages/Chart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuData from "./MenuData";
export default function App() {
    const [keranjang,setKeranjang]=useState([]);
    function handleAddItem(event){
        
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu menu={MenuData}/>} />
                    <Route path="charts" element={<Charts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
