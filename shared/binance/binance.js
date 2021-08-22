import axios from 'axios'

const apiKey = process.env.BINANCE_API_KEY
const secretKey = process.env.BINANCE_SECRET_KEY
const baseUrl = process.env.BINANCE_BASE_URL

export const getLatestTrade = async symbol => {
  try {
    const config = {
      headers: {
        'X-MBX-APIKEY': apiKey,
      },
      params: {
        symbol: symbol,
        limit: 1,
      },
    }

    const res = await axios.get(`${baseUrl}/api/v3/trades`, config)
    return {
      success: res.status === 200,
      data: res.data[0],
      price: res.data[0].price,
    }
  } catch (error) {
    return {
      success: false,
      message: error.toString(),
    }
  }
}

/**
 *
 * @param {string} symbol
 * @returns curernt price for specified symbol, or prices
 * of all symbols if called with no parameters.
 */
export const getMarketPrice = async symbol => {
  try {
    const config = {
      headers: {
        'X-MBX-APIKEY': apiKey,
      },
    }
    symbol && (config.params = { symbol: symbol })

    const res = await axios.get(`${baseUrl}/api/v3/ticker/price`, config)
    return {
      success: res.status === 200,
      data: res.data,
    }
  } catch (error) {
    return {
      success: false,
      message: error.toString(),
    }
  }
}
