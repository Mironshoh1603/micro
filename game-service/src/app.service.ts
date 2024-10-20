import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game } from './game.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Game) private gameReposiry: Repository<Game>) {}
  async getAllGames(): Promise<Game[]> {
    const games = await this.gameReposiry.find();
    return games;
  }
  async createGame(createGameDto: any): Promise<Game[]> {
    const game = this.gameReposiry.create(createGameDto);
    await this.gameReposiry.save(game);
    return game;
  }
  async getGameById(id: number): Promise<Game> {
    const game = await this.gameReposiry.findOneBy({ id: id });
    return game;
  }
}
