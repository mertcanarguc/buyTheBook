import { Controller, Get} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import path from 'path';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async HomePage(){
    return this.appService.homePage()
  }
}