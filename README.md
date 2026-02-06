# Cryptonalysis Dashboard

## Overview
The Crypto Analysis Dashboard is a web application designed to help users monitor and analyze the cryptocurrency market in real time.  
It provides live price updates, market trends, and key metrics to support better understanding of crypto market movements.

The application uses the CoinGecko API to fetch reliable and up-to-date cryptocurrency data.

## Key Features
- Live cryptocurrency price tracking
- Real-time price change updates
- Market data visualization
- Multiple cryptocurrencies support
- Clean and responsive user interface
- Fast data fetching and updates

## Tech Stack
- Next.js (Latest)
- React
- TypeScript
- Tailwind CSS
- CoinGecko API


## Data Source
All cryptocurrency market data is fetched from the **CoinGecko API**, ensuring accurate and up-to-date pricing and market information.

## Use Case
This application helps users:
- Monitor live cryptocurrency prices
- Analyze price changes and market trends
- Track multiple crypto assets in one place

## Environment Variables
Create a .env.local file in the root directory of the project and add the following variables:
  COINGECKO_API_KEY=your_coingecko_api_key
  NEXT_PUBLIC_COINGECKO_API_KEY=your_coingecko_api_key
  COINGECKO_BASE_URL=https://api.coingecko.com/api/v3
  NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=wss://stream.coingecko.com/v1

## Note:
API keys are not included in the repository for security reasons.
You can generate a CoinGecko API key from the official CoinGecko website.
Variables prefixed with NEXT_PUBLIC_ are exposed to the client as required by Next.js.

## Getting Started

### Installation
```bash
git clone https://github.com/rk4-logic/cryptonalysis.git
cd crypto-analysis-dashboard
npm install
