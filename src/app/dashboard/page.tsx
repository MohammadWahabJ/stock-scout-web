'use client'

import Head from 'next/head';
import {filterStocksBySymbols} from '../../data'

const watchlist = ["6981","7203", "6758", "9984"];

export default function Dashboard() {
  const watchlistStocks = filterStocksBySymbols(watchlist)

    return (
 <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Stock Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlistStocks.map((stock) => (
            <div key={stock.symbol} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">{stock.name}</h2>
              <p className="text-gray-600">Symbol: {stock.symbol}</p>
              <p className="text-gray-600">Market Cap: {stock.marketCap}</p>
              <p className="text-2xl font-bold mt-2">¥{stock.price.toFixed(2)}</p>
              <p
                className={`mt-2 text-lg ${
                  stock.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}
