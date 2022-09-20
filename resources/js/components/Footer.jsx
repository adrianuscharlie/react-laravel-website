import React from "react";
import Social from "./Social";
import Data from "./ProjectData";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark p-10">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 pb-12 text-slate-300 font-medium md:w-1/2">
                        <h2 className="font-bold text-4xl text-white mb-5">
                            More Information
                        </h2>
                        <h3 className="font-bold text-2xl mb-2">Our Address</h3>
                        <p>kopirumahbapak@gmail.com</p>
                        <p>
                            Jl. Kemiri No.165A, Nologaten, Caturtunggal, Kec.
                            Depok
                        </p>
                        <p>
                            Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                        </p>
                    </div>
                    <div className="w-full px-4 pb-12 md:w-1/2">
                        <h3 className="font-semibold text-xl text-white mb-5">
                            Link
                        </h3>
                        <ul className="text-slate-300">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/menu">Menu</Link>
                            </li>
                            <li>
                                <Link to="/charts">Charts</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-800 ">
                    <div className="flex items-center justify-center mb-5">
                        {Data.map((data, index) => (
                            <Social
                                key={index}
                                name={data.nama}
                                url={data.url}
                                path={data.path}
                            />
                        ))}
                    </div>
                    <p className="font-medium text-sm text-slate-500 text-center">
                        Created with ❤️ by Adrianus Charlie using React.js and
                        Tailwind.css
                    </p>
                </div>
            </div>
        </footer>
    );
}
