import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('GAME_MICRO') private clientGameService: ClientProxy,
    @Inject('PAYMENT_MICRO') private clientPaymnetService: ClientProxy,
  ) {}

  @Get()
  getHel(): string {
    return 'Salom';
  }
  @Get('game/:param')
  getHello(@Param() params: any): Observable<any> {
    return this.clientGameService.send(
      { cmd: 'get_games' },
      { params: params },
    );
  }
  @Post('game')
  createGame(@Body() createGAme: any): Observable<any> {
    return this.clientGameService.send({ cmd: 'create_game' }, createGAme);
  }
  @Get('payment')
  getPayment(): Observable<any> {
    return this.clientPaymnetService.send({ cmd: 'get_payment' }, {});
  }
  @Post('payment')
  createPayment(@Body() createdata: any): Observable<any> {
    return this.clientPaymnetService.send(
      { cmd: 'create_payment' },
      createdata,
    );
  }
}
