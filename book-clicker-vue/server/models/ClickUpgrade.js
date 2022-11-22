import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const ClickUpgradeSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    perClick: { type: Number, required: true },
    price: { type: Number, required: true },
    accountId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

