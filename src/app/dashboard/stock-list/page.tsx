'use client'

import Head from 'next/head';
import stockList from '../../../data'

export default function Dashboard() {

    return (
        <>
            <Head>
                <title>Company Stock Dashboard</title>
            </Head>

            <div className="min-h-screen bg-gray-100 py-6">
                <div className="container mx-auto px-4">

                    <h1 className="text-3xl font-semibold text-center mb-8">Stock List</h1>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company Stock Summary</h2>

                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Symbol</th>
                                        <th>Market Cap</th>
                                        <th>Price</th>
                                        <th>Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stockList.map((company) => (
                                        <tr key={company.symbol}>
                                            <td className="text-gray-700 font-medium">{company.name}</td>
                                            <td className="text-gray-500">{company.symbol}</td>
                                            <td className="text-gray-500">{company.marketCap}</td>
                                            <td className="text-gray-500">{company.price}</td>
                                            <td className="text-gray-700">{company.change}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

