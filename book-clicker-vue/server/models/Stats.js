import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StatsSchema = new Schema(
  {
    booksPerSec: { type: Number, required: true, default: 0 },
    booksPerClick: { type: Number, required: true, default: 1 },
    turned: { type: Boolean, required: true, default: false },
    accountId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

StatsSchema.virtual('account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,
  ref: 'Profile'
})
