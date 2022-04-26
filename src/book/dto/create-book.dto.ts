import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  sku: string
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
  @IsString()
  @IsNotEmpty()
  category: string
  @ApiProperty()
  @IsMongoId()
  @IsDefined()
  author: string
}
