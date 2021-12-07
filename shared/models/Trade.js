import mongoose from 'mongoose'
const { Schema } = mongoose

const TradeSchema = new Schema({
  symbol: {
    type: String,
    required: true,
    index: true,
  },
  buyQuantity: {
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
  sellQuantity: {
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
  buyOrderId: {
    type: String,
  },
  buyClientOrderId: {
    type: String,
  },
  sellOrderId: {
    type: String,
  },
  sellClientOrderId: {
    type: String,
  },
  owner: {
    type: String,
    default: 'Baraa',
  },
  lastTrailedPrice: {
    type: Number,
    default: 0,
  },
  botVersion: {
    type: Object,
  },
  farida: {
    type: String,
  },
})

export const Trade = mongoose.model('Trade', TradeSchema)
