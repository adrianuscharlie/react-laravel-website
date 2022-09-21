import React from "react";
import image from "../assets/menu/cappucino.jpg";
import { useState } from "react";

export default function TableCharts(props) {
    const [item,setItem]=useState(props.data)
    function handleQuantity(event){
        setItem(prevItem=>({
            ...prevItem,
            qty:event.target.valueAsNumber,
            subtotal:prevItem['price']*event.target.valueAsNumber
        }));
        props.handleQuantityChange(item);
    }
    return (
        <tr className="bg-slate-50 border-b  hover:bg-gray-5">
            <td className="p-4 w-32">
                <img src={image} alt="Apple Watch" />
            </td>
            <td className="py-4 px-6 font-semibold text-gray-900">
                {item.name}
            </td>
            <td className="py-4 px-6">
                <div className="flex items-center space-x-3">
                    <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 "
                        type="button"
                    >
                        <span className="sr-only">Quantity button</span>
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div>
                        <input
                            min={0}
                            max={1000}
                            type="number"
                            id="first_product"
                            className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 "
                            required=""
                            value={item.qty}
                            onChange={event=>handleQuantity(event)}
                        />
                    </div>
                    <button
                        className="inline-flex items-center p-1 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
                        type="button"
                    >
                        <span className="sr-only">Quantity button</span>
                        <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
            </td>
            <td className="py-4 px-6 font-bold text-gray-900 ">
                Rp. {item.subtotal}
            </td>
        </tr>
    );
}
