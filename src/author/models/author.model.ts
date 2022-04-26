import * as mongoose from 'mongoose'

export class AuthorModel {
  fullName:string
}

export const Author = new mongoose.Schema<AuthorModel>(
  {
    fullName:{type:String,required:true}
  }, {
  timestamps: true
})