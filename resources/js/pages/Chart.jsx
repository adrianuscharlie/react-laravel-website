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
                        <div className="container lg:px-36">
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                                <table className="w-full text-sm text-left">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Product
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Qty
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 px-6"
                                            >
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {MenuData.map((item) => {
                                            return (
                                                <TableCharts
                                                    name={item.name}
                                                    price={item.price}
                                                />
                                            );
                                        })}
                                        <tr className="bg-gray-200  hover:bg-gray-5">
                                        <td className="py-4 px-6"></td>
                                        <td className="py-4 px-6"></td>
                                        <td className="py-4 px-6 font-bold text-right ">Subtotal</td>
                                        <td className="py-4 px-6">dwoqbdoqwb</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
