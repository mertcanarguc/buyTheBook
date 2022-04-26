import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './auth/constants';
import { LocalStrategy } from './auth/local.strategy';
import { JwtStrategy } from './auth/jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './models/user.model';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'User', schema: User }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [UsersService,LocalStrategy,JwtStrategy],
  exports: [UsersService],
  controllers: [UserController]
})
export class UsersModule {}