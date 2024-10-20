import { Controller, Get, Post, Body, Inject } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { ClientProxy } from '@nestjs/microservices/client';

@Controller('game')
export class GameController {
  constructor(@Inject('GAME_MICRO') private clientGameService: ClientProxy) {}

  // @Post()
  // create(@Body() createGameDto: CreateGameDto) {
  //   return this.clientGameService.send({ cmd: 'create_game' }, createGameDto);
  // }

  @Get()
  findAll() {
    return 'messahe';

    // return "this.clientGameService.send({ cmd: 'get_all_games' }, {})";
  }
}
