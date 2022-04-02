/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { getLogger } from '@super-rad-poc/services/shared';

import { AppModule } from './app.module';


async function bootstrap() {
  const logger = getLogger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5005;
  await app.listen(port);
  logger.info(
   `Posts service is running http://localhost:${port}`
  );
}

bootstrap();
