const stockData = [
    {
        symbol: "7203",
        name: "Toyota Motor Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 1850.50,
        change: 1.25,
        marketCap: "25.6T"
    },
    {
        symbol: "6758",
        name: "Sony Group Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 11960.00,
        change: -0.67,
        marketCap: "15.3T"
    },
    {
        symbol: "9432",
        name: "NTT Docomo, Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 3050.75,
        change: 0.32,
        marketCap: "11.1T"
    },
    {
        symbol: "9984",
        name: "SoftBank Group Corp.",
        currency: "JPY",
        exchange: "JPX",
        price: 4320.00,
        change: 2.14,
        marketCap: "10.8T"
    },
    {
        symbol: "6861",
        name: "Keyence Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 66900.00,
        change: -1.05,
        marketCap: "13.9T"
    },
    {
        symbol: "6954",
        name: "Fanuc Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 23790.50,
        change: -0.48,
        marketCap: "5.6T"
    },
    {
        symbol: "8035",
        name: "Tokyo Electron Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 51050.00,
        change: 1.67,
        marketCap: "9.1T"
    },
    {
        symbol: "4063",
        name: "Shin-Etsu Chemical Co., Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 42000.00,
        change: 0.85,
        marketCap: "11.7T"
    },
    {
        symbol: "8306",
        name: "Mitsubishi UFJ Financial Group, Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 710.25,
        change: 0.58,
        marketCap: "10.2T"
    },
    {
        symbol: "6752",
        name: "Panasonic Holdings Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 1350.75,
        change: -0.75,
        marketCap: "3.2T"
    },
    {
        symbol: "7201",
        name: "Nissan Motor Co., Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 540.50,
        change: 1.12,
        marketCap: "2.1T"
    },
    {
        symbol: "6301",
        name: "Komatsu Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 2875.60,
        change: -0.45,
        marketCap: "3.4T"
    },
    {
        symbol: "7751",
        name: "Canon Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 2920.00,
        change: 0.95,
        marketCap: "4.0T"
    },
    {
        symbol: "6501",
        name: "Hitachi, Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 6290.00,
        change: 1.34,
        marketCap: "6.5T"
    },
    {
        symbol: "4324",
        name: "Dentsu Group Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 3925.50,
        change: -0.58,
        marketCap: "1.9T"
    },
    {
        symbol: "9502",
        name: "Chubu Electric Power Co., Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 1390.75,
        change: 0.42,
        marketCap: "1.2T"
    },
    {
        symbol: "6762",
        name: "TDK Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 4815.00,
        change: 2.10,
        marketCap: "1.8T"
    },
    {
        symbol: "8058",
        name: "Mitsubishi Corporation",
        currency: "JPY",
        exchange: "JPX",
        price: 4190.25,
        change: 0.78,
        marketCap: "7.4T"
    },
    {
        symbol: "9501",
        name: "Tokyo Electric Power Company Holdings, Inc.",
        currency: "JPY",
        exchange: "JPX",
        price: 680.00,
        change: 1.89,
        marketCap: "800B"
    },
    {
        symbol: "6981",
        name: "Murata Manufacturing Co., Ltd.",
        currency: "JPY",
        exchange: "JPX",
        price: 8365.00,
        change: -1.02,
        marketCap: "4.7T"
    }
];

export function getStockBySymbol(symbol) {
    const stock = stockData.find((company) => company.symbol === symbol);

    if (stock) {
        return stock;
    } else {
        return `Stock with symbol ${symbol} not found.`;
    }
}

export function filterStocksBySymbols(symbols) {
  const filteredStocks = stockData.filter((company) => symbols.includes(company.symbol));

  if (filteredStocks.length > 0) {
    return filteredStocks;
  } else {
    return "No stocks found for the provided symbols.";
  }
}

export default stockData;
