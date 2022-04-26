import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderModel } from 'src/order/models/order.model';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookModel } from './models/book.model';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private readonly Book: Model<BookModel>,
    @InjectModel('Order') private readonly Order: Model<OrderModel>,
  ) { }

  create(createBookDto: CreateBookDto) {
    try {
      return this.Book.create(createBookDto)
    } catch (error) {
      return error
    }
  }

  findAll() {
    try {
      return this.Book.find({}).lean()
    } catch (error) {
      return error
    }
  }

  findOne(id: string) {
    try {
      return this.Book.findById(id)
    } catch (error) {
      return error
    }
  }

  /**
 * Önceden satın almış olduğu kitapların kategorilerine göre ve
 * ucuzdan pahalıya doğru 5 adet kitap önerdim
 */
  async bookAdvice(req) {
    try {

      let userOldOrders = await this.Order.find({ userId: req.user.userId })
      let oldOrdersCategories = []

      userOldOrders.forEach(order => {
        order.items.forEach(item => {
          oldOrdersCategories.push(item.category)
        });
      });

      let adviceBooks = await this.Book.find({
        category: { $in: oldOrdersCategories },
      }).sort({ 'price': 1 }).limit(5)

      return await adviceBooks

    } catch (error) {
      return error
    }
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    try {
      return this.Book.findByIdAndUpdate(id, updateBookDto)
    } catch (error) {
      return error
    }
  }

  async updateCount(id: any, quantity: number) {
    try {
      const book = await this.Book.findById({ _id: id })
      await book.updateOne({ quantity: quantity, salesCount: book.salesCount + 1 }, (err, data) => {
        if (err)
          return { success: false, error: err }

        return { success: true }
      })
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.Book.remove({ _id: id })
    } catch (error) {
      return error
    }
  }
}
