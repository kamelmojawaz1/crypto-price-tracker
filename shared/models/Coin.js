import mongoose from 'mongoose'
const { Schema } = mongoose

const CoinSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    index: true,
  },
  base: {
    type: String,
  },
  resistance: {
    type: Number,
    required: true,
  },
  support: {
    type: Number,
    required: true,
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: String,
    required: true,
    default: 'Kamal',
  },
})

export const Coin = mongoose.model('Coin', CoinSchema)
