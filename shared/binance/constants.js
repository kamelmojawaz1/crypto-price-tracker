export const binanceSymbols = {
  BTCUSD: 'BTCUSD',
  ETHUSD: 'ETHUSD',
  XRPUSD: 'XRPUSD',
  BCHUSD: 'BCHUSD',
  LTCUSD: 'LTCUSD',
  USDTUSD: 'USDTUSD',
  BTCUSDT: 'BTCUSDT',
  ETHUSDT: 'ETHUSDT',
  XRPUSDT: 'XRPUSDT',
  BCHUSDT: 'BCHUSDT',
  LTCUSDT: 'LTCUSDT',
  BNBUSD: 'BNBUSD',
  BTCUSD: 'BTCUSD',
  EOSUSD: 'EOSUSD',
}

export const selectedSymbols = {
  BTCUSD: { symbol: 'BTCUSD', base: 'BTC', quote: 'USD' },
  LTCUSD: { symbol: 'LTCUSD', base: 'LTC', quote: 'USD' },
  BNBUSD: { symbol: 'BNBUSD', base: 'BNB', quote: 'USD' },
  ADAUSD: { symbol: 'ADAUSD', base: 'ADA', quote: 'USD' },
  XLMUSD: { symbol: 'XLMUSD', base: 'XLM', quote: 'USD' },
  ZRXUSD: { symbol: 'ZRXUSD', base: 'ZRX', quote: 'USD' },
  LINKUSD: { symbol: 'LINKUSD', base: 'LINK', quote: 'USD' },
  RVNUSD: { symbol: 'RVNUSD', base: 'RVN', quote: 'USD' },
  DASHUSD: { symbol: 'DASHUSD', base: 'DASH', quote: 'USD' },
  ZECUSD: { symbol: 'ZECUSD', base: 'ZEC', quote: 'USD' },
  ALGOUSD: { symbol: 'ALGOUSD', base: 'ALGO', quote: 'USD' },
  IOTAUSD: { symbol: 'IOTAUSD', base: 'IOTA', quote: 'USD' },
  ENJUSD: { symbol: 'ENJUSD', base: 'ENJ', quote: 'USD' },
  ZILUSD: { symbol: 'ZILUSD', base: 'ZIL', quote: 'USD' },
  VETUSD: { symbol: 'VETUSD', base: 'VET', quote: 'USD' },
  MATICUSD: { symbol: 'MATICUSD', base: 'MATIC', quote: 'USD' },
  DOGEUSD: { symbol: 'DOGEUSD', base: 'DOGE', quote: 'USD' },
  SUSHIUSD: { symbol: 'SUSHIUSD', base: 'SUSHI', quote: 'USD' },
  GRTUSD: { symbol: 'GRTUSD', base: 'GRT', quote: 'USD' },
  AAVEUSD: { symbol: 'AAVEUSD', base: 'AAVE', quote: 'USD' },
  FILUSD: { symbol: 'FILUSD', base: 'FIL', quote: 'USD' },
  ZENUSD: { symbol: 'ZENUSD', base: 'ZEN', quote: 'USD' },
  OXTUSD: { symbol: 'OXTUSD', base: 'OXT', quote: 'USD' },
  // PAXGUSD: { symbol: 'PAXGUSD', base: 'PAXG', quote: 'USD' },
  ETHUSD: { symbol: 'ETHUSD', base: 'ETH', quote: 'USD' },
  UNIUSD: { symbol: 'UNIUSD', base: 'UNI', quote: 'USD' },
  SOLUSD: { symbol: 'SOLUSD', base: 'SOL', quote: 'USD' },
  BANDUSD: { symbol: 'BANDUSD', base: 'BAND', quote: 'USD' },
  ONEUSD: { symbol: 'ONEUSD', base: 'ONE', quote: 'USD' },
  COMPUSD: { symbol: 'COMPUSD', base: 'COMP', quote: 'USD' },
  OMGUSD: { symbol: 'OMGUSD', base: 'OMG', quote: 'USD' },
  HBARUSD: { symbol: 'HBARUSD', base: 'HBAR', quote: 'USD' },
  XTZUSD: { symbol: 'XTZUSD', base: 'XTZ', quote: 'USD' },
  NANOUSD: { symbol: 'NANOUSD', base: 'NANO', quote: 'USD' },
  QTUMUSD: { symbol: 'QTUMUSD', base: 'QTUM', quote: 'USD' },
  NEOUSD: { symbol: 'NEOUSD', base: 'NEO', quote: 'USD' },
  ATOMUSD: { symbol: 'ATOMUSD', base: 'ATOM', quote: 'USD' },
  WAVESUSD: { symbol: 'WAVESUSD', base: 'WAVES', quote: 'USD' },
  XLMUSD: { symbol: 'XLMUSD', base: 'XLM', quote: 'USD' },
  ETCUSD: { symbol: 'ETCUSD', base: 'ETC', quote: 'USD' },
  EOSUSD: { symbol: 'EOSUSD', base: 'EOS', quote: 'USD' },
  HNTUSD: { symbol: 'HNTUSD', base: 'HNT', quote: 'USD' },
  ANKRUSD: { symbol: 'ANKRUSD', base: 'ANKR', quote: 'USD' },
  AMPUSD: { symbol: 'AMPUSD', base: 'AMP', quote: 'USD' },
  ONTUSD: { symbol: 'ONTUSD', base: 'ONT', quote: 'USD' },
  BATUSD: { symbol: 'BATUSD', base: 'BAT', quote: 'USD' },
  MANAUSD: { symbol: 'MANAUSD', base: 'MANA', quote: 'USD' },
  EGLDUSD: { symbol: 'EGLDUSD', base: 'EGLD', quote: 'USD' },
  ICXUSD: { symbol: 'ICXUSD', base: 'ICX', quote: 'USD' },
  MKRUSD: { symbol: 'MKRUSD', base: 'MKR', quote: 'USD' },
  // XRPUSD: { symbol: 'XRPUSD', base: 'XRP', quote: 'USD' },
}

// export const fromSymbolToBaseQuote = symbol => {
//   const { BTCUSD, LTCUSD, BNBUSD, ADAUSD, XLMUSD, ZRXUSD, LINKUSD } =
//     selectedSymbols
//   switch (symbol) {
//     case BTCUSD:
//       return { base: 'BTC', quote: 'USD' }

//     case LTCUSD:
//       return { base: 'LTC', quote: 'USD' }
//     default:

//     case BNBUSD:
//       return { base: 'BNB', quote: 'USD' }

//     case ADAUSD:
//       return { base: 'ADA', quote: 'USD' }

//     case XLMUSD:
//       return { base: 'XLM', quote: 'USD' }

//       case ZRXUSD:
//         return{base:'ZRX':quote:''}

//       break
//   }
// }
