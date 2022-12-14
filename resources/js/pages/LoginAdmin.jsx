import React from "react";

export default function LogAdmin() {
    return (
        <div className="grid h-screen place-items-center bg-slate-200">
            
            <div className="flex-wrap items-center">
            <h1 className=" text-bold text-blue-800 text-4xl mb-10">Admin Kopi Rumah Bapak</h1>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                        >
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                        >
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                        />
                        <p className="text-red-500 text-xs italic">
                            Please choose a password.
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-black text-white hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                        >
                            Sign In
                        </button>
                        <a
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            href="#"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 RPL Kelompok 6. All rights reserved.
                </p>
            </div>
        </div>
    );
}
