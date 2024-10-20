import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'get_games' })
  getGame(@Payload() payload: any) {
    console.log(payload, '--payload', payload.param === 'all');
    if (payload.params.param == 'all') {
      return this.appService.getAllGames();
    } else {
      return this.appService.getGameById(payload.params.param);
    }
  }
  @MessagePattern({ cmd: 'create_game' })
  create(createGame: any) {
    return this.appService.createGame(createGame);
  }
}
