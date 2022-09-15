import React from "react";
import MenuData from "../components/MenuData";
import Card from "../components/Cards";
export default function Menu() {
    return (
        <section className="pt-36 pb-30 lg:pt-36">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full item-center justify-center text-center px-20 lg:w-full">
                        <h1 className="text-base font-semibold text-slate-300 mb-5 md:text-xl">
                            Let's Order Our Best Menu!
                        </h1>
                        <h2 className="text-4xl font-bold text-slate-700 mb-5 md:text-5xl">
                            Menu
                        </h2>
                        <p className="text-base text-black mb-10">
                            Jl. Kemiri No.165A, Nologaten, Caturtunggal, Kec.
                            Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta
                            55281
                        </p>
                        <div className="flex flex-wrap lg:px-10 py-10">
                        {MenuData.map((data) => (
                            <Card url={data.url} name={data.name} price={data.price} />
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
