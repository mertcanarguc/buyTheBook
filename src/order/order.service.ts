import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookService } from 'src/book/book.service';
import { BookModel } from 'src/book/models/book.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderModel } from './models/order.model';

@Injectable()
export class OrderService {

  constructor(
    @InjectModel('Order') private readonly Order: Model<OrderModel>,
    @InjectModel('Book') private readonly Book: Model<BookModel>,
    private readonly bookService:BookService
  ) { }

  async create(req) {
    let bookIds = await req.body.items.map(item => item.id)
    let books = await this.Book.find({ _id: { $in: bookIds } })
    let mappedData = []
    let totalPrice = 0
    books.forEach(element => {
      this.bookService.updateCount(element._id,element.quantity - 1)
      totalPrice += element.price
      mappedData.push({ id: element._id, title: element.title, price: element.price, category:element.category })
    });
    try {
      await this.Order.create({ 
        userId:req.user.userId, 
        items: mappedData,
        totalPrice:totalPrice 
      })
    } catch (error) {
      return error
    }
  }

  findAll() {
    try {
      return this.Order.find({}).lean()
    } catch (error) {
      return error
    }
  }

  findOne(id: string) {
    try {
      return this.Order.findById(id)
    } catch (error) {
      return error
    }
  }
}
