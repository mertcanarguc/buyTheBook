import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './models/user.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { jwtConstants } from 'src/users/auth/constants';
const bcrypt = require('bcrypt')
const saltRound = 10


@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly User: Model<UserModel>,
    private jwtService: JwtService
  ){}

  async create(body: CreateUserDto) {
    try {
      let hasUser = await this.User.findOne({ email: body.email }) 
      body.password = await this.convertToHash(body.password)
      if (!hasUser) {
        const User = new this.User(body)
        return await User.save()
      } else {
        return {
          success: false,
          message: `This ('${body.email}') email is already exist`
        }
      }
    } catch (error) {
      return error
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.User.findOne({ email: email });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async loginUser(user: any) {
    try {
      const existUser = await this.User.findOne({ email: user.email }).exec()
      if (existUser.email) {
        let checkPwd;

        await this.compareToHash(user.password, existUser.password).then(resp => {
          if (resp) {
            checkPwd = true
          } else {
            checkPwd = false
          }
        })

        if (checkPwd) {
          const authJsonWebToken = this.jwtService.sign({ user: existUser })
          return await { success: true, token: authJsonWebToken }
        } else {
          return await {
            success: false,
            response: 'user password is incorrect'
          }
        }
      } else {
        return await { success: false, response: 'user does not exist!' }
      }
    } catch (ex) {
      return await {
        success: false,
        response: 'something wrong white login process'
      }
    }
  }

  async convertToHash(value: string) {
    let hashPwd;
    await bcrypt.hash(`${jwtConstants.secret}${value}`, saltRound).then(hash => {
      hashPwd = hash
    });
    return await hashPwd
  }

  async compareToHash(password, hashed) {
    const match = await bcrypt.compareSync(`${jwtConstants.secret}${password}`, hashed)
    return await match
  }
}