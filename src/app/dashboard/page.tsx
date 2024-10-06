// pages/dashboard.js

import Head from 'next/head';

// Mock stock data for companies
const companies = [
  {
    name: 'Apple Inc.',
    symbol: 'AAPL',
    price: 145.09,
    change: 1.25, // in percentage
    marketCap: '2.41T',
  },
  {
    name: 'Tesla, Inc.',
    symbol: 'TSLA',
    price: 739.78,
    change: -2.31,
    marketCap: '748.89B',
  },
  {
    name: 'Microsoft Corporation',
    symbol: 'MSFT',
    price: 296.32,
    change: 0.86,
    marketCap: '2.21T',
  },
  {
    name: 'Amazon.com, Inc.',
    symbol: 'AMZN',
    price: 3401.46,
    change: -0.44,
    marketCap: '1.73T',
  },
];

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Company Stock Dashboard</title>
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Dashboard Header */}
        <div className="bg-white shadow-md py-4 px-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Stock Market Dashboard</h1>
          <p className="text-sm text-gray-500">Overview of your favorite companies' stock prices and changes.</p>
        </div>

        {/* Stock Data Table */}
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Company Stock Summary</h2>
            
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Change (%)</th>
                    <th>Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company) => (
                    <tr key={company.symbol}>
                      <td className="text-gray-700 font-medium">{company.name}</td>
                      <td className="text-gray-500">{company.symbol}</td>
                      <td className={`font-semibold ${company.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        ${company.price.toFixed(2)}
                      </td>
                      <td className={`${company.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        {company.change.toFixed(2)}%
                      </td>
                      <td className="text-gray-700">{company.marketCap}</td>
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
