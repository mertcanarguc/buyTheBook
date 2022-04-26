import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsDefined, IsMongoId, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  _id: string
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  price: number
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  quantity: number
  @ApiProperty()
  @IsNumber()
  @IsDefined()
  salesCount: number
  @ApiProperty()
  @IsMongoId()
  @IsDefined()
  author: string
}
