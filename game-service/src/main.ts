import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost', // The host for the microservice
        port: 3002, // The port for the microservice (different from API Gateway)
      },
    },
  );
  // localhost:3000/game/file
  // Start the microservice
  await app.listen();
  console.log('User service is listening on port 3001');
}
bootstrap();
