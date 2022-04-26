import * as mongoose from 'mongoose'

export class UserModel {
  firstName:string
  lastName:string
  email:string
  password:string
}

export const User = new mongoose.Schema<UserModel> (
  {
    firstName: { type: String, required:true },
    lastName: { type: String, required:true },
    email: { type: String, required:true, unique:true },
    password: { type: String, required:true },
  }, {
    timestamps: true
  }
)