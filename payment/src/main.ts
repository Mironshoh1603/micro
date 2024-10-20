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
        port: 3004, // The port for the microservice (different from API Gateway)
      },
    },
  );

  // Start the microservice
  await app.listen();
}
bootstrap();
