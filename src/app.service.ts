import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  homePage() {
    return {
      success:true,
      message:'Welcome to Buy The Book API !'
    };
  }
}
