import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP, // Or use other protocols like Redis, gRPC, etc.
    options: {
      host: 'localhost',
      port: 3001, // The port the gateway listens on for microservices
    },
  });

  // Start both the microservices and the HTTP server
  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
