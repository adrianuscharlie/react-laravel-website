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
        var item=event.target.value;
        item=MenuData.find((menu)=>{
            return menu.id==item;
        })
        const newItem={
            id:item.id,
            name:item.name,
            price:item.price,
            url:item.url,
            star:item.star,
            subtotal:0,
            qty:1
        }
        setKeranjang(prevItem=>[...prevItem,newItem])
    }

    function handleQuantityChange(item){
        let index=keranjang.findIndex((obj=>obj.id==item.id))
        let newArr=[...keranjang]
        newArr[index]=item
        setKeranjang(newArr);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Home />} />
                    <Route path="menu" element={<Menu menu={MenuData} addKeranjang={handleAddItem}/>} />
                    <Route path="charts" element={<Charts keranjang={keranjang} handleQuantityChange={handleQuantityChange}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
