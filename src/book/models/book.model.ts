import { IsMongoId } from 'class-validator'
import * as mongoose from 'mongoose'

export class BookModel {
  title: string
  description: string
  sku: string
  price: number
  quantity: number
  salesCount: number
  category: string
  author: mongoose.Schema.Types.ObjectId
}

export const Book = new mongoose.Schema<BookModel>(
  {
    title: { type: String, required: true }, //Unique yapmıyorum çünkü aynı isimde farklı yazarlara ait kitaplar olabilir.
    description: { type: String, required: true, minlength: 5, maxlength: 500 },
    sku: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 10 },
    quantity: { type: Number, required: true, default: 10, min: 10 },
    salesCount: { type: Number, required: true, default: 0},
    category: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, required: true }
  }, {
  timestamps: true
})