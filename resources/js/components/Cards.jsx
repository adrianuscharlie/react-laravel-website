import React from "react";
import image from "../assets/menu/cappucino.jpg";

export default function Card(props) {
    return (
        <div className="max-w-full my-5 bg-white rounded-lg shadow-md lg:w-1/6 m-2">
            <img className="rounded-md object-scale-down" src={image} />
            <div className="p-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-700 text-left mb-2">
                    {props.name}
                </h5>
                <div className="flex items-center justify-between mb-3">
                    <span className="text-base font-bold text-gray-900 lg:text-xl mr-2">
                        Rp.{props.price}
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-white bg-slate-500 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5  py-2 text-center lg:text-lg pr-10"
                    >
                        Buy
                    </a>
                </div>
                <div className="flex items-center mt-2">
                    <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-yellow-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>First star</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="ml-2 text-base">{props.star} Rating</span>
                </div>
            </div>
        </div>
    );
}
