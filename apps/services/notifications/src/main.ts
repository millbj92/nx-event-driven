/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { KafkaOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.createMicroservice<KafkaOptions>(AppModule, {
    transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [`${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`],
        },
        consumer: {
          groupId: 'notification-service-consumer'
        }
      }
  });
  app.listen();
  Logger.log('Notifications is running.')
}

bootstrap();
