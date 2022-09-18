import React from "react";
import Data from "../SocialsData";
import Social from "./Socials";

export default function Footer(){
    return(
        <footer className="bg-dark pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 pb-12 text-slate-300 font-medium md:w-1/2">
                        <h2 className="font-bold text-4xl text-white mb-5">More Information</h2>
                        <h3 className="font-bold text-2xl mb-2">My Address</h3>
                        <p>adrianus.charlie02@gmail.com</p>
                        <p>Jl. Kaliurang Km.17, Pakembinangun, Pakem</p>
                        <p>Sleman</p>
                    </div>
                    <div className="w-full px-4 pb-12 md:w-1/2">
                    <h3 className="font-semibold text-xl text-white mb-5">Link</h3>
                    <ul className="text-slate-300">
                        <li>
                            <a href="#home" className="inline-block text-base hover:text-primary mb-3">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="inline-block text-base hover:text-primary mb-3">About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="inline-block text-base hover:text-primary mb-3">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="inline-block text-base hover:text-primary mb-3">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="w-full pt-10 border-t border-slate-800 ">
                    <div className="flex items-center justify-center mb-5">
                        {Data.map((data)=>(
                         <Social name={data.nama} url={data.url} path={data.path}/>
                     ))}
                    </div>
                    <p className="font-medium text-sm text-slate-500 text-center">Created with ❤️ by Adrianus Charlie using React.js and Tailwind.css</p>
                </div>
            </div>
        </footer>
    )
}