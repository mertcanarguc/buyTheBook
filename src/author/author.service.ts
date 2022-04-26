import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorModel } from './models/author.model';

@Injectable()
export class AuthorService {
  constructor(
    @InjectModel('Author') private readonly Author: Model<AuthorModel>,
  ){}

  create(createAuthorDto: CreateAuthorDto) {
    try {
      return this.Author.create(createAuthorDto)
    } catch (error) {
      return error
    }
  }

  findAll() {
    try {
      return this.Author.find({}).lean()
    } catch (error) {
      return error
    }
  }

  findOne(id: string) {
    try {
      return this.Author.findById(id)
    } catch (error) {
      return error
    }
  }

  update(id: string, updateAuthorDto: UpdateAuthorDto) {
    try {
      return this.Author.findByIdAndUpdate(id,updateAuthorDto)
    } catch (error) {
      return error
    }
  }

  remove(id: string) {
    try {
      return this.Author.remove({_id:id})
    } catch (error) {
      return error
    }
  }
}
