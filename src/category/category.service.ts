import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryModel } from './models/category.model';

@Injectable()
export class CategoryService {

  constructor(
    @InjectModel('Category') private readonly Category: Model<CategoryModel>,
  ){}

  create(createCategoryDto: CreateCategoryDto) {
    try {
      return this.Category.create(createCategoryDto)
    } catch (error) {
      return error
    }
  }

  findAll() {
    try {
      return this.Category.find({}).lean()
    } catch (error) {
      return error
    }
  }

  findOne(id: string) {
    try {
      return this.Category.findById(id)
    } catch (error) {
      return error
    }
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      return this.Category.findByIdAndUpdate(id,updateCategoryDto)
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.Category.remove({_id:id})
    } catch (error) {
      return error
    }
  }
}
