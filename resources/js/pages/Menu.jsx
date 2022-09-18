import React from "react";
import MenuData from "../components/MenuData";
import Card from "../components/Cards";
import { useState } from "react";
export default function Menu() {
    const [query,setQuery]=useState("");

    function handleQuery(event){
        console.log(event.target.value);
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
                                        placeholder="Search Coffee, Food...."
                                        required=""
                                        value={query}
                                        onChange={handleQuery}
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="flex flex-wrap items-center bg-white lg:pl-36">
                            {MenuData.map((data) => (
                                <Card
                                    url={data.url}
                                    name={data.name}
                                    price={data.price}
                                    star={data.star}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
