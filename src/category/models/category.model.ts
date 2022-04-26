import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import * as mongoose from 'mongoose'

export class CategoryModel {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string
}

export const Category = new mongoose.Schema<CategoryModel>(
  {
    title: { type: String, required: true, unique:true }
  }, {
  timestamps: true
})