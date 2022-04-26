import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order } from './models/order.model';
import { Book } from 'src/book/models/book.model';
import { BookService } from 'src/book/book.service';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Order', schema: Order }]),
    MongooseModule.forFeature([{ name: 'Book', schema: Book }]),
  ],
  controllers: [OrderController],
  providers: [OrderService,BookService]
})
export class OrderModule {}
