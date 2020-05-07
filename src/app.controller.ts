import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('sender')
  send(@Res() res): string {
    return res.sendFile('send.html', {
      root: 'views'
    });
  }

  @Get('receiver')
  receive(@Res() res): string {
    return res.sendFile('receive.html', {
      root: 'views'
    });
  }
}
