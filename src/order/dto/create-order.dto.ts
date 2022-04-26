import { ApiBody, ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsArray, IsDefined, IsMongoId, IsNumber, IsString, ValidateNested } from "class-validator";


export class Items {
  @ApiProperty()
  @IsMongoId()
  id: string;
  // @ApiProperty()
  // @IsString()
  // title: string;
  // @ApiProperty()
  // @IsString()
  // sku: string;
}


export class CreateOrderDto {
  // @ApiProperty()
  // @IsMongoId()
  // userId: string
  @ApiProperty({type:[Items]})
  @IsArray()
  @Type(() => Items)
  @ValidateNested({each:true})
  @IsDefined()
  items: Items[];
//   @ApiProperty()
//   @IsNumber()
//   totalPrice: number
}


