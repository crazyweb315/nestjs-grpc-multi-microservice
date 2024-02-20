import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      // url: 'http://localhost:6379',
      url: '0.0.0.0:50051',
      protoPath: '/proto/micr1.proto',
      package: 'micr1',
    },
  });

  // Start the microservice
  await app.listen(); // Just call listen without any arguments
  console.log('Microservice is listening on 0.0.0.0:50051');
}
bootstrap();
