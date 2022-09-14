import React from "react";
import picture from '../assets/logo2.png';

export default function Navbar() {
    return (
            <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-1">
                <div className="container">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href="#" className="font-bold text-slate-800 text-lg block py-6"><img src={picture} alt="cafe_photo" className="w-1/6 mx-auto rounded-md"/></a>
                        </div>
                        <div className="flex items-center">
                        <button id="hamburger" name="hamburger" type="button" className=" hamburger block absolute right-4 lg:hidden">
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                      </button>
                      <nav id="nav-menu" className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full 
                      lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul className="block lg:flex">
                          <li className="group">
                            <a href="#home" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a>
                          </li>
                          <li className="group">
                            <a href="#about" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Menu</a>
                          </li>
                          <li className="group">
                            <a href="#portfolio" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Chart</a>
                          </li>
                          <li className="group">
                            <a href="#contact" className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Logout</a>
                          </li>
                        </ul>
                      </nav>
                        </div>
                    </div>
                </div>
            </header>
    );
}
