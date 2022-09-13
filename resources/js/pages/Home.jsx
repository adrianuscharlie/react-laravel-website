import React from "react";
import picture from "../assets/rumah bapak.jpg";
import Data from "../components/ProjectData";
import Social from "../components/Social";

export default function Home(){
    return  (
    <div>
        <section className="pt-36 lg:pt-1">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center px-20 lg:w-1/2">
                    <h1 className="text-base font-semibold text-slate-300 mb-5 md:text-xl">A cup of coffee, for better life and better day!</h1>
                    <h2 className="text-4xl font-bold text-slate-700 mb-5 md:text-5xl">Kopi Rumah Bapak</h2>
                    <p className="text-base text-black mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius et lacus ac semper. Mauris sagittis justo volutpat metus ultrices, eget sollicitudin arcu pretium. Suspendisse pharetra odio eu erat rutrum lobortis a eu mi. Fusce id nibh convallis, volutpat odio.</p>
                    <a href="#about" className="text-base font-semibold bg-slate-500 text-white rounded-md py-3 px-8">About Us</a>
                    </div>
                <div className="w-full self-end px-20 lg:w-1/2 pt-15">
                    <div className="relative mt-10 lg:mt-9 lg:right-0">
                        <img src={picture} alt="cafe_photo" className="max-w-full mx-auto rounded-md"/>
                    </div> 
                </div>
            </div>
        </div>
        </section>
        <section id="about" className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
                        <h2 className="font-bold text-dark mb-5 text-3xl max-w-xl lg:text-4xl">Let's get know me better</h2>
                        <p className="font-medium text-base  text-secondary max-w-xl lg:text-lg">Have a strong desire, a high curiosity, good management and want to learn new things. I'm interested in some programming languages like Java, Python and Web Development using Java and Bootstrap. Im enthusiast with Machine Learning and already develop some Machine Learning project using Tensorflow. Lately, I've been studying Software Engineering using Flutter and developing some Apps Project</p>
                    </div>
                    <div className="w-full px-4 mb-10 lg:w-1/2">
                        <h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Let's connect each other</h3>
                        <p className="font-medium text-base text-secondary mb-6">If you want to know more about me, you can find me in this social media by clicking these button below:</p>
                        <div className="flex items-center">
                        {Data.map((data)=>(
                            <Social name={data.nama} url={data.url} path={data.path}/>
                        ))}
                    </div>
                    </div>
                    
                </div>
            </div>        
        </section>
    </div>
    )
}