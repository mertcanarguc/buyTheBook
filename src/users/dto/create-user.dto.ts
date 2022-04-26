import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName:string
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  lastName:string
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email:string
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password:string
}