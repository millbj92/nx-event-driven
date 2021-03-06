/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { getLogger } from '@super-rad-poc/services/shared';
import { KafkaOptions, Transport } from '@nestjs/microservices';

const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: [
        `${process.env.AUTH_KAFKA_BROKER_HOST}:${process.env.AUTH_KAFKA_BROKER_PORT}`
      ],
    }
  }
}


async function bootstrap() {
  const logger = getLogger();
  logger.info(process.env.AUTH_KAFKA_BROKER_HOST);
  logger.info(process.env.AUTH_KAFKA_BROKER_PORT);
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(microserviceConfig);
  app.enableCors({
    origin: '*'
  })
  const port = process.env.AUTH_PORT || 5002;
  app.startAllMicroservices();
  await app.listen(port);
  logger.info(
    `Auth service is running on http://localhost:${port}`
  );
}

bootstrap();
