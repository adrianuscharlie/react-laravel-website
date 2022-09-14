import React from "react";

export default function Card(props) {
    console.log(props);
    return (
        <div className="w-full mb-10 bg-slate-500 lg:w-1/2">
            <div className="max-w-full rounded overflow-hidden shadow-lg bg-white lg:w-1/3">
                <img className="w-full" src={props.url} alt={props.name}></img>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{props.name}</div>
                    <p className="text-base text-gray-700">{props.price}</p>
                </div>
                <div className="px-6 py-4 mb-5">
                    <a
                        className="text-base font-semibold bg-slate-300 py-3 px-8 rounded-full
            hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                        Buy
                    </a>
                </div>
            </div>
        </div>
    );
}
