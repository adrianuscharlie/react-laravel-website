import React from "react";
import Card from "../components/Cards";
import { useState } from "react";
export default function Menu(props) {
    const [query,setQuery]=useState("");

    const filteredMenu=props.menu.filter(menu=>{
        return (menu
            .name
            .toLowerCase()
            .includes(query.toLowerCase()));
    });

    function handleQuery(event){
        setQuery(event.target.value);
    }
    return (
        <section className="pt-36 pb-30 lg:pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full item-center justify-center text-center px-20">
                        <h1 className="text-base font-semibold text-slate-300 mb-5 md:text-xl">
                            Let's Order Our Best Menu!
                        </h1>
                        <h2 className="text-4xl font-bold text-slate-700 mb-5 md:text-5xl">
                            Menu
                        </h2>
                        <p className="text-base text-black mb-10">
                            cafe kami hadir dengan menu paling unggulan, dibuat
                            dengan kopi cita rasa nusantara dan juga dibuat
                            dengan penuh perasaan dan hati ❤️❤️❤️
                        </p>
                        <div className="container mb-10 lg:px-36 lg:pl-40">
                            <form>
                                <label
                                    htmlFor="default-search"
                                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                                >
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            ></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="block p-4 pl-10 w-full text-sm text-gray-900 bg-slate-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Type the menu name..."
                                        required=""
                                        value={query}
                                        onChange={handleQuery}
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="bg-white lg:p-10 lg:m-10  lg:grid lg:grid-cols-4 lg:gap-2">
                            {filteredMenu.map((data,index) => (
                                <Card
                                    key={index}
                                    id={data.id}
                                    url={data.url}
                                    name={data.name}
                                    price={data.price}
                                    star={data.star}
                                    addKeranjang={props.addKeranjang}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
