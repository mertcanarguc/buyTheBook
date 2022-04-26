import * as mongoose from 'mongoose'

export class OrderModel {
  userId: string
  items: any
  totalPrice: number
} 

//Schema'ya vergilendirme de dahil edilebilir.
export const Order = new mongoose.Schema<OrderModel>(
  {
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    totalPrice: { type: Number, required: true }
  }, {
  timestamps: true
})