import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      // url: 'localhost:6379',
      url: '0.0.0.0:50051',
      protoPath: '/proto/micr_prisma.proto',
      package: 'micr_prisma',
    },
  });

  // tslint:disable-next-line: no-console
  app.listen();
  console.log('Microservice Prisma is listening')
}
bootstrap();
