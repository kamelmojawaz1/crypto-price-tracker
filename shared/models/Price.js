import mongoose from 'mongoose'
const { Schema } = mongoose

const PriceSchema = new Schema({
  symbol: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    require: true,
    default: Date(),
    index: true,
  },
  price: {
    type: Number,
    required: true,
  },
})

export const Price = mongoose.model('Price', PriceSchema)
