import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book } from './models/book.model';
import { Order } from 'src/order/models/order.model';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Book', schema: Book }]),
    MongooseModule.forFeature([{ name: 'Order', schema: Order }]),
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
