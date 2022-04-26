import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';

@ApiTags("Users")
@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async Register(@Body() body:CreateUserDto){
    return this.userService.create(body)
  }

  @Post('login')
  async Login(@Body() body:LoginUserDto){
    return this.userService.loginUser(body)
  }

}
