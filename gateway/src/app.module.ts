import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'GAME_MICRO',
        transport: Transport.TCP,
        options: { port: 3002, host: 'localhost' },
      },
      {
        name: 'PAYMENT_MICRO',
        transport: Transport.TCP,
        options: { port: 3004, host: 'localhost' },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
