import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [GameController],
  providers: [],
})
export class GameModule {}
