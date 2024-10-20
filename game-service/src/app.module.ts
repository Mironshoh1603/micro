import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Game } from './game.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'post_db',
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || '1234',
      database: process.env.DATABASE_NAME || 'library',
      autoLoadEntities: true,
      synchronize: true,
      entities: [Game],
      retryAttempts: 500, // Retry connection 5 times
      retryDelay: 30,
    }),
    TypeOrmModule.forFeature([Game]),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
