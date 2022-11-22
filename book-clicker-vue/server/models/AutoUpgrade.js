import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AutoUpgradeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, default: 1 },
    perSec: { type: Number, required: true },
    price: { type: Number, required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

