import React from "react";
import TableCharts from "../components/TableCharts";
import MenuData from "../components/MenuData";
export default function Charts() {
    return (
        <section className="pt-36 pb-32">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full items-center justify-center text-center px-10">
                        <h1 className="text-base font-semibold text-slate-300 mb-5 md:text-xl">
                            Test Keranjang
                        </h1>
                        <h2 className="text-4xl font-bold text-slate-700 mb-5 md:text-5xl">
                            Keranjang Belanja
                        </h2>

                        <p className="text-base text-black mb-10">
                            Periksa dulu pesanan di keranjang sebelum checkout
                            ya!
                        </p>
                        <div className="container">
                            <TableCharts data={MenuData}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
