/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getLogger } from '@super-rad-poc/services/shared';
import { KafkaOptions, Transport } from '@nestjs/microservices';

const microserviceConfig: KafkaOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      brokers: [`${process.env.USERS_KAFKA_BROKER_HOST}:${process.env.USERS_KAFKA_BROKER_PORT}`],
    }
  }
}

async function bootstrap() {
  const logger = getLogger();
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(microserviceConfig);
  const port = process.env.USERS_PORT || 5007;
  app.startAllMicroservices();
  await app.listen(port);
  logger.info(
    `Users service is running on http://localhost:${port}`
  );
}

bootstrap();
