import './env.js'
import { promisify } from 'util'
import { connectToDb } from './shared/database/connect.js'
import { getMarketPrice } from './shared/binance/binance.js'
import { selectedSymbols } from './shared/binance/constants.js'
import { Price } from './shared/models/Price.js'

const mongoUrl = process.env.MONGO_URL
const timeOutAsync = promisify(setTimeout)

const priceLoop = async () => {
  const res = await getMarketPrice()
  if (res.success) {
    const { data } = res
    data.map(async symbolPrice => {
      if (!selectedSymbols[symbolPrice.symbol]) return
      const priceDocument = {
        symbol: symbolPrice.symbol,
        base: selectedSymbols[symbolPrice.symbol].base,
        quote: selectedSymbols[symbolPrice.symbol].quote,
        price: symbolPrice.price,
        time: Date.now(),
      }
      await Price.create(priceDocument)
    })
  }
  await timeOutAsync(600000)
  priceLoop()
}

const start = async () => {
  try {
    await connectToDb(mongoUrl)
    priceLoop()
  } catch (error) {
    console.log(error)
  }
}

start()
