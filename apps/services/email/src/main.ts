/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { getLogger} from '@super-rad-poc/services/shared';
import { KafkaOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
   const logger = getLogger();

   const app = await NestFactory.createMicroservice<KafkaOptions>(AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [
            `${process.env.KAFKA_BROKER_HOST}:${process.env.KAFKA_BROKER_PORT}`
          ],
        },
        consumer: {
          groupId: 'auth-service-consumer'
        }
      }
    });

    app.listen();
    logger.info(`Auth service is running`);

  // const app = await NestFactory.create(AppModule);
  // const port = process.env.PORT || 5008;
  // app.connectMicroservice(microserviceConfig);
  // await app.listen(port);
  // app.startAllMicroservices();
  // logger.info(
  //   `Email running on: http://localhost:${port}`
  // );
}

bootstrap();
