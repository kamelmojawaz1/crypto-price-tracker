import mongoose from 'mongoose'
const { Schema } = mongoose

const TradeSchema = new Schema({
  base: {
    type: String,
    required: true,
    index: true,
  },
  quote: {
    type: String,
    required: true,
  },
  buyAmount: {
    type: Number,
    required: true,
  },
  buyPrice: {
    type: Number,
    required: true,
  },
  buyTotal: {
    type: Number,
    required: true,
  },
  buyTime: {
    type: Date,
    require: true,
  },
  stopLoss: {
    type: Number,
    required: true,
  },
  sellAmount: {
    type: Number,
    default: 0,
  },
  sellPrice: {
    type: Number,
  },
  sellTotal: {
    type: Number,
  },
  sellTime: {
    type: Date,
  },
  profit: {
    type: Number,
    default: 0,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
})

export const Trade = mongoose.model('Trade', TradeSchema)
