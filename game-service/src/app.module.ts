import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      host: 'localhost',
      type: 'postgres',
      password: '1234',
      database: 'games',
      username: 'postgres',
      port: 5432,
      autoLoadEntities: true,
      synchronize: true,
      entities: [Game],
    }),
    TypeOrmModule.forFeature([Game]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
